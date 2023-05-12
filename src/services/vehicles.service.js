import 'assets/data/cars.json';

async function fetchCars() {
  try {
    const response = await fetch('assets/cars.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function getVehiclesData() {
  const vehiclesData = [];
  // ToDo: move to a service or something
  const VehiclesResponse = (await fetchCars())[0].VehAvailRSCore;
  VehiclesResponse.VehVendorAvails.forEach((vehVendorAvail, vendorIndex) => {
    vehVendorAvail.VehAvails.forEach((vehAvail, vehicleIndex) => {
      vehiclesData.push({
        ...vehAvail,
        id: `${vendorIndex}-${vehicleIndex}`,
        Vendor: vehVendorAvail.Vendor,
      });
    });
  });

  return [vehiclesData, VehiclesResponse.VehRentalCore];
}

export function orderVehiclesBy(fullFeature, list) {
  return list.sort((a, b) => {
    let sorter = 1;
    const [feature, featureDir] = fullFeature.split('_');

    switch (feature) {
      case 'price':
        sorter =
          Number(a.TotalCharge['@RateTotalAmount']) -
          Number(b.TotalCharge['@RateTotalAmount']);
        break;
      case 'vendor':
        sorter = a.Vendor['@Name'].localeCompare(b.Vendor['@Name']);
        break;
      default:
        break;
    }

    return featureDir === 'up' ? sorter : sorter * -1;
  });
}
