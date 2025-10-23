export interface Region {
  id: string;
  name: string;
  provider: string;
  lat: number;
  lng: number;
  endpoint?: string;
  unavailable?: boolean;
}

export const cloudProviders = [
  "AWS",
  "Google Cloud",
  "DigitalOcean",
  "Hetzner",
  "IBM Cloud",
  "Linode",
  "OVH Cloud",
  "Scaleway",
  "Vultr",
  "CoreWeave",
] as const;

export const regions: Region[] = [
  // AWS Regions
  { id: "aws-us-east-1", name: "Virginia", provider: "AWS", lat: 37.4316, lng: -78.6569, endpoint: "https://dynamodb.us-east-1.amazonaws.com" },
  { id: "aws-us-east-2", name: "Ohio", provider: "AWS", lat: 40.4173, lng: -82.9071, endpoint: "https://dynamodb.us-east-2.amazonaws.com" },
  { id: "aws-us-west-1", name: "California", provider: "AWS", lat: 37.3541, lng: -121.9552, endpoint: "https://dynamodb.us-west-1.amazonaws.com" },
  { id: "aws-us-west-2", name: "Oregon", provider: "AWS", lat: 45.5152, lng: -122.6784, endpoint: "https://dynamodb.us-west-2.amazonaws.com" },
  { id: "aws-ca-central-1", name: "Canada Central", provider: "AWS", lat: 45.5017, lng: -73.5673, endpoint: "https://dynamodb.ca-central-1.amazonaws.com" },
  { id: "aws-ca-west-1", name: "Canada West", provider: "AWS", lat: 49.2827, lng: -123.1207, endpoint: "https://dynamodb.ca-west-1.amazonaws.com" },
  { id: "aws-eu-west-1", name: "Ireland", provider: "AWS", lat: 53.3498, lng: -6.2603, endpoint: "https://dynamodb.eu-west-1.amazonaws.com" },
  { id: "aws-eu-west-2", name: "London", provider: "AWS", lat: 51.5074, lng: -0.1278, endpoint: "https://dynamodb.eu-west-2.amazonaws.com" },
  { id: "aws-eu-west-3", name: "Paris", provider: "AWS", lat: 48.8566, lng: 2.3522, endpoint: "https://dynamodb.eu-west-3.amazonaws.com" },
  { id: "aws-eu-central-1", name: "Frankfurt", provider: "AWS", lat: 50.1109, lng: 8.6821, endpoint: "https://dynamodb.eu-central-1.amazonaws.com" },
  { id: "aws-eu-central-2", name: "Zurich", provider: "AWS", lat: 47.3769, lng: 8.5417, endpoint: "https://dynamodb.eu-central-2.amazonaws.com" },
  { id: "aws-eu-south-1", name: "Milan", provider: "AWS", lat: 45.4642, lng: 9.1900, endpoint: "https://dynamodb.eu-south-1.amazonaws.com" },
  { id: "aws-eu-south-2", name: "Spain", provider: "AWS", lat: 40.4168, lng: -3.7038, endpoint: "https://dynamodb.eu-south-2.amazonaws.com" },
  { id: "aws-eu-north-1", name: "Stockholm", provider: "AWS", lat: 59.3293, lng: 18.0686, endpoint: "https://dynamodb.eu-north-1.amazonaws.com" },
  { id: "aws-ap-east-1", name: "Hong Kong", provider: "AWS", lat: 22.3193, lng: 114.1694, endpoint: "https://dynamodb.ap-east-1.amazonaws.com" },
  { id: "aws-ap-southeast-3", name: "Jakarta", provider: "AWS", lat: -6.2088, lng: 106.8456, endpoint: "https://dynamodb.ap-southeast-3.amazonaws.com" },
  { id: "aws-ap-south-1", name: "Mumbai", provider: "AWS", lat: 19.0760, lng: 72.8777, endpoint: "https://dynamodb.ap-south-1.amazonaws.com" },
  { id: "aws-ap-south-2", name: "Hyderabad", provider: "AWS", lat: 17.3850, lng: 78.4867, endpoint: "https://dynamodb.ap-south-2.amazonaws.com" },
  { id: "aws-ap-northeast-3", name: "Osaka", provider: "AWS", lat: 34.6937, lng: 135.5023, endpoint: "https://dynamodb.ap-northeast-3.amazonaws.com" },
  { id: "aws-ap-northeast-2", name: "Seoul", provider: "AWS", lat: 37.5665, lng: 126.9780, endpoint: "https://dynamodb.ap-northeast-2.amazonaws.com" },
  { id: "aws-ap-southeast-1", name: "Singapore", provider: "AWS", lat: 1.3521, lng: 103.8198, endpoint: "https://dynamodb.ap-southeast-1.amazonaws.com" },
  { id: "aws-ap-southeast-2", name: "Sydney", provider: "AWS", lat: -33.8688, lng: 151.2093, endpoint: "https://dynamodb.ap-southeast-2.amazonaws.com" },
  { id: "aws-ap-southeast-4", name: "Melbourne", provider: "AWS", lat: -37.8136, lng: 144.9631, endpoint: "https://dynamodb.ap-southeast-4.amazonaws.com" },
  { id: "aws-ap-northeast-1", name: "Tokyo", provider: "AWS", lat: 35.6762, lng: 139.6503, endpoint: "https://dynamodb.ap-northeast-1.amazonaws.com" },
  { id: "aws-sa-east-1", name: "São Paulo", provider: "AWS", lat: -23.5505, lng: -46.6333, endpoint: "https://dynamodb.sa-east-1.amazonaws.com" },
  { id: "aws-af-south-1", name: "Cape Town", provider: "AWS", lat: -33.9249, lng: 18.4241, endpoint: "https://dynamodb.af-south-1.amazonaws.com" },
  { id: "aws-mx-central-1", name: "Mexico", provider: "AWS", lat: 19.4326, lng: -99.1332, endpoint: "https://dynamodb.mx-central-1.amazonaws.com" },

  // Google Cloud Platform
  { id: "gcp-us-central1", name: "Iowa", provider: "Google Cloud", lat: 41.8781, lng: -93.0977, endpoint: "https://us-central1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-us-east1", name: "South Carolina", provider: "Google Cloud", lat: 33.8361, lng: -81.1637, endpoint: "https://us-east1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-us-east4", name: "Virginia", provider: "Google Cloud", lat: 37.4316, lng: -78.6569, endpoint: "https://us-east4-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-us-west1", name: "Oregon", provider: "Google Cloud", lat: 45.5152, lng: -122.6784, endpoint: "https://us-west1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-us-west2", name: "Los Angeles", provider: "Google Cloud", lat: 34.0522, lng: -118.2437, endpoint: "https://us-west2-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-us-west3", name: "Salt Lake City", provider: "Google Cloud", lat: 40.7608, lng: -111.8910, endpoint: "https://us-west3-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-us-west4", name: "Las Vegas", provider: "Google Cloud", lat: 36.1699, lng: -115.1398, endpoint: "https://us-west4-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-northamerica-northeast1", name: "Montreal", provider: "Google Cloud", lat: 45.5017, lng: -73.5673, endpoint: "https://northamerica-northeast1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-northamerica-northeast2", name: "Toronto", provider: "Google Cloud", lat: 43.6532, lng: -79.3832, endpoint: "https://northamerica-northeast2-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-southamerica-east1", name: "São Paulo", provider: "Google Cloud", lat: -23.5505, lng: -46.6333, endpoint: "https://southamerica-east1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-southamerica-west1", name: "Santiago", provider: "Google Cloud", lat: -33.4489, lng: -70.6693, endpoint: "https://southamerica-west1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west1", name: "Belgium", provider: "Google Cloud", lat: 50.8503, lng: 4.3517, endpoint: "https://europe-west1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west2", name: "London", provider: "Google Cloud", lat: 51.5074, lng: -0.1278, endpoint: "https://europe-west2-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west3", name: "Frankfurt", provider: "Google Cloud", lat: 50.1109, lng: 8.6821, endpoint: "https://europe-west3-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west4", name: "Netherlands", provider: "Google Cloud", lat: 52.3676, lng: 4.9041, endpoint: "https://europe-west4-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west6", name: "Zurich", provider: "Google Cloud", lat: 47.3769, lng: 8.5417, endpoint: "https://europe-west6-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west8", name: "Milan", provider: "Google Cloud", lat: 45.4642, lng: 9.1900, endpoint: "https://europe-west8-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west9", name: "Paris", provider: "Google Cloud", lat: 48.8566, lng: 2.3522, endpoint: "https://europe-west9-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west10", name: "Berlin", provider: "Google Cloud", lat: 52.5200, lng: 13.4050, endpoint: "https://europe-west10-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-west12", name: "Turin", provider: "Google Cloud", lat: 45.0703, lng: 7.6869, endpoint: "https://europe-west12-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-north1", name: "Finland", provider: "Google Cloud", lat: 60.1695, lng: 24.9354, endpoint: "https://europe-north1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-europe-southwest1", name: "Madrid", provider: "Google Cloud", lat: 40.4168, lng: -3.7038, endpoint: "https://europe-southwest1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-east1", name: "Taiwan", provider: "Google Cloud", lat: 25.0330, lng: 121.5654, endpoint: "https://asia-east1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-east2", name: "Hong Kong", provider: "Google Cloud", lat: 22.3193, lng: 114.1694, endpoint: "https://asia-east2-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-northeast1", name: "Tokyo", provider: "Google Cloud", lat: 35.6762, lng: 139.6503, endpoint: "https://asia-northeast1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-northeast2", name: "Osaka", provider: "Google Cloud", lat: 34.6937, lng: 135.5023, endpoint: "https://asia-northeast2-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-northeast3", name: "Seoul", provider: "Google Cloud", lat: 37.5665, lng: 126.9780, endpoint: "https://asia-northeast3-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-south1", name: "Mumbai", provider: "Google Cloud", lat: 19.0760, lng: 72.8777, endpoint: "https://asia-south1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-south2", name: "Delhi", provider: "Google Cloud", lat: 28.7041, lng: 77.1025, endpoint: "https://asia-south2-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-southeast1", name: "Singapore", provider: "Google Cloud", lat: 1.3521, lng: 103.8198, endpoint: "https://asia-southeast1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-asia-southeast2", name: "Jakarta", provider: "Google Cloud", lat: -6.2088, lng: 106.8456, endpoint: "https://asia-southeast2-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-australia-southeast1", name: "Sydney", provider: "Google Cloud", lat: -33.8688, lng: 151.2093, endpoint: "https://australia-southeast1-gcp-ping.cloudfunctions.net/ping" },
  { id: "gcp-australia-southeast2", name: "Melbourne", provider: "Google Cloud", lat: -37.8136, lng: 144.9631, endpoint: "https://australia-southeast2-gcp-ping.cloudfunctions.net/ping" },

  // DigitalOcean
  { id: "do-sfo2", name: "San Francisco 2", provider: "DigitalOcean", lat: 37.7749, lng: -122.4194, endpoint: "https://speedtest-sfo2.digitalocean.com" },
  { id: "do-sfo3", name: "San Francisco 3", provider: "DigitalOcean", lat: 37.7749, lng: -122.4194, endpoint: "https://speedtest-sfo3.digitalocean.com" },
  { id: "do-nyc3", name: "New York 3", provider: "DigitalOcean", lat: 40.7128, lng: -74.0060, endpoint: "https://speedtest-nyc3.digitalocean.com" },
  { id: "do-tor1", name: "Toronto", provider: "DigitalOcean", lat: 43.6532, lng: -79.3832, endpoint: "https://speedtest-tor1.digitalocean.com" },
  { id: "do-lon1", name: "London", provider: "DigitalOcean", lat: 51.5074, lng: -0.1278, endpoint: "https://speedtest-lon1.digitalocean.com" },
  { id: "do-ams3", name: "Amsterdam", provider: "DigitalOcean", lat: 52.3676, lng: 4.9041, endpoint: "https://speedtest-ams3.digitalocean.com" },
  { id: "do-fra1", name: "Frankfurt", provider: "DigitalOcean", lat: 50.1109, lng: 8.6821, endpoint: "https://speedtest-fra1.digitalocean.com" },
  { id: "do-sgp1", name: "Singapore", provider: "DigitalOcean", lat: 1.3521, lng: 103.8198, endpoint: "https://speedtest-sgp1.digitalocean.com" },
  { id: "do-blr1", name: "Bangalore", provider: "DigitalOcean", lat: 12.9716, lng: 77.5946, endpoint: "https://speedtest-blr1.digitalocean.com" },
  { id: "do-syd1", name: "Sydney", provider: "DigitalOcean", lat: -33.8688, lng: 151.2093, endpoint: "https://speedtest-syd1.digitalocean.com" },

  // Hetzner
  { id: "hetzner-fsn1", name: "Falkenstein", provider: "Hetzner", lat: 50.4779, lng: 12.3713, endpoint: "https://fsn1.your-server.de/ping" },
  { id: "hetzner-nbg1", name: "Nuremberg", provider: "Hetzner", lat: 49.4521, lng: 11.0767, endpoint: "https://nbg1.your-server.de/ping" },
  { id: "hetzner-hel1", name: "Helsinki", provider: "Hetzner", lat: 60.1695, lng: 24.9354, endpoint: "https://hel1.your-server.de/ping" },
  { id: "hetzner-ash", name: "Ashburn", provider: "Hetzner", lat: 39.0438, lng: -77.4874, endpoint: "https://ash.your-server.de/ping" },
  { id: "hetzner-hil", name: "Hillsboro", provider: "Hetzner", lat: 45.5228, lng: -122.9359, endpoint: "https://hil.your-server.de/ping" },
  { id: "hetzner-sin", name: "Singapore", provider: "Hetzner", lat: 1.3521, lng: 103.8198, endpoint: "https://sin.your-server.de/ping" },

  // IBM Cloud
  { id: "ibm-us-south", name: "Dallas", provider: "IBM Cloud", lat: 32.7767, lng: -96.7970, endpoint: "https://us-south.functions.cloud.ibm.com" },
  { id: "ibm-us-east", name: "Washington DC", provider: "IBM Cloud", lat: 38.9072, lng: -77.0369, endpoint: "https://us-east.functions.cloud.ibm.com" },
  { id: "ibm-eu-gb", name: "London", provider: "IBM Cloud", lat: 51.5074, lng: -0.1278, endpoint: "https://eu-gb.functions.cloud.ibm.com" },
  { id: "ibm-eu-de", name: "Frankfurt", provider: "IBM Cloud", lat: 50.1109, lng: 8.6821, endpoint: "https://eu-de.functions.cloud.ibm.com" },
  { id: "ibm-au-syd", name: "Sydney", provider: "IBM Cloud", lat: -33.8688, lng: 151.2093, endpoint: "https://au-syd.functions.cloud.ibm.com" },

  // Linode
  { id: "linode-newark", name: "Newark", provider: "Linode", lat: 40.7357, lng: -74.1724, endpoint: "https://speedtest.newark.linode.com/ping" },
  { id: "linode-singapore", name: "Singapore", provider: "Linode", lat: 1.3521, lng: 103.8198, endpoint: "https://speedtest.singapore.linode.com/ping" },
  { id: "linode-london", name: "London", provider: "Linode", lat: 51.5074, lng: -0.1278, endpoint: "https://speedtest.london.linode.com/ping" },
  { id: "linode-frankfurt", name: "Frankfurt", provider: "Linode", lat: 50.1109, lng: 8.6821, endpoint: "https://speedtest.frankfurt.linode.com/ping" },
  { id: "linode-dallas", name: "Dallas", provider: "Linode", lat: 32.7767, lng: -96.7970, endpoint: "https://speedtest.dallas.linode.com/ping" },
  { id: "linode-toronto", name: "Toronto", provider: "Linode", lat: 43.6532, lng: -79.3832, endpoint: "https://speedtest.toronto.linode.com/ping" },
  { id: "linode-sydney", name: "Sydney", provider: "Linode", lat: -33.8688, lng: 151.2093, endpoint: "https://speedtest.sydney.linode.com/ping" },
  { id: "linode-atlanta", name: "Atlanta", provider: "Linode", lat: 33.7490, lng: -84.3880, endpoint: "https://speedtest.atlanta.linode.com/ping" },
  { id: "linode-tokyo", name: "Tokyo", provider: "Linode", lat: 35.6762, lng: 139.6503, endpoint: "https://speedtest.tokyo.linode.com/ping" },
  { id: "linode-mumbai", name: "Mumbai", provider: "Linode", lat: 19.0760, lng: 72.8777, endpoint: "https://speedtest.mumbai.linode.com/ping" },
  { id: "linode-fremont", name: "Fremont", provider: "Linode", lat: 37.5485, lng: -121.9886, endpoint: "https://speedtest.fremont.linode.com/ping" },

  // OVH Cloud
  { id: "ovh-bhs", name: "Beauharnois", provider: "OVH Cloud", lat: 45.3168, lng: -73.8659, endpoint: "https://bhs.proof.ovh.net" },
  { id: "ovh-gra", name: "Gravelines", provider: "OVH Cloud", lat: 50.9867, lng: 2.1250, endpoint: "https://gra.proof.ovh.net" },
  { id: "ovh-rbx", name: "Roubaix", provider: "OVH Cloud", lat: 50.6942, lng: 3.1746, endpoint: "https://rbx.proof.ovh.net" },
  { id: "ovh-sbg", name: "Strasbourg", provider: "OVH Cloud", lat: 48.5734, lng: 7.7521, endpoint: "https://sbg.proof.ovh.net" },
  { id: "ovh-lon", name: "London", provider: "OVH Cloud", lat: 51.5074, lng: -0.1278, endpoint: "https://lon.proof.ovh.net" },
  { id: "ovh-fra", name: "Frankfurt", provider: "OVH Cloud", lat: 50.1109, lng: 8.6821, endpoint: "https://fra.proof.ovh.net" },
  { id: "ovh-waw", name: "Warsaw", provider: "OVH Cloud", lat: 52.2297, lng: 21.0122, endpoint: "https://waw.proof.ovh.net" },
  { id: "ovh-sgp", name: "Singapore", provider: "OVH Cloud", lat: 1.3521, lng: 103.8198, endpoint: "https://sgp.proof.ovh.net" },
  { id: "ovh-syd", name: "Sydney", provider: "OVH Cloud", lat: -33.8688, lng: 151.2093, endpoint: "https://syd.proof.ovh.net" },

  // Scaleway
  { id: "scaleway-par", name: "Paris", provider: "Scaleway", lat: 48.8566, lng: 2.3522, endpoint: "https://api.scaleway.com" },
  { id: "scaleway-ams", name: "Amsterdam", provider: "Scaleway", lat: 52.3676, lng: 4.9041, endpoint: "https://api.scaleway.com" },
  { id: "scaleway-waw", name: "Warsaw", provider: "Scaleway", lat: 52.2297, lng: 21.0122, endpoint: "https://api.scaleway.com" },

  // Vultr
  { id: "vultr-amsterdam", name: "Amsterdam", provider: "Vultr", lat: 52.3676, lng: 4.9041, endpoint: "https://ams-nl-ping.vultr.com" },
  { id: "vultr-atlanta", name: "Atlanta", provider: "Vultr", lat: 33.7490, lng: -84.3880, endpoint: "https://ga-us-ping.vultr.com" },
  { id: "vultr-bangalore", name: "Bangalore", provider: "Vultr", lat: 12.9716, lng: 77.5946, endpoint: "https://blr-in-ping.vultr.com" },
  { id: "vultr-dallas", name: "Dallas", provider: "Vultr", lat: 32.7767, lng: -96.7970, endpoint: "https://tx-us-ping.vultr.com" },
  { id: "vultr-frankfurt", name: "Frankfurt", provider: "Vultr", lat: 50.1109, lng: 8.6821, endpoint: "https://fra-de-ping.vultr.com" },
  { id: "vultr-london", name: "London", provider: "Vultr", lat: 51.5074, lng: -0.1278, endpoint: "https://lon-gb-ping.vultr.com" },
  { id: "vultr-losangeles", name: "Los Angeles", provider: "Vultr", lat: 34.0522, lng: -118.2437, endpoint: "https://lax-ca-us-ping.vultr.com" },
  { id: "vultr-madrid", name: "Madrid", provider: "Vultr", lat: 40.4168, lng: -3.7038, endpoint: "https://mad-es-ping.vultr.com" },
  { id: "vultr-melbourne", name: "Melbourne", provider: "Vultr", lat: -37.8136, lng: 144.9631, endpoint: "https://mel-au-ping.vultr.com" },
  { id: "vultr-mexico", name: "Mexico City", provider: "Vultr", lat: 19.4326, lng: -99.1332, endpoint: "https://mex-mx-ping.vultr.com" },
  { id: "vultr-miami", name: "Miami", provider: "Vultr", lat: 25.7617, lng: -80.1918, endpoint: "https://fl-us-ping.vultr.com" },
  { id: "vultr-newjersey", name: "New Jersey", provider: "Vultr", lat: 40.7357, lng: -74.1724, endpoint: "https://nj-us-ping.vultr.com" },
  { id: "vultr-paris", name: "Paris", provider: "Vultr", lat: 48.8566, lng: 2.3522, endpoint: "https://par-fr-ping.vultr.com" },
  { id: "vultr-seoul", name: "Seoul", provider: "Vultr", lat: 37.5665, lng: 126.9780, endpoint: "https://sel-kor-ping.vultr.com" },
  { id: "vultr-singapore", name: "Singapore", provider: "Vultr", lat: 1.3521, lng: 103.8198, endpoint: "https://sgp-ping.vultr.com" },
  { id: "vultr-stockholm", name: "Stockholm", provider: "Vultr", lat: 59.3293, lng: 18.0686, endpoint: "https://sto-se-ping.vultr.com" },
  { id: "vultr-sydney", name: "Sydney", provider: "Vultr", lat: -33.8688, lng: 151.2093, endpoint: "https://syd-au-ping.vultr.com" },
  { id: "vultr-tokyo", name: "Tokyo", provider: "Vultr", lat: 35.6762, lng: 139.6503, endpoint: "https://hnd-jp-ping.vultr.com" },
  { id: "vultr-toronto", name: "Toronto", provider: "Vultr", lat: 43.6532, lng: -79.3832, endpoint: "https://tor-ca-ping.vultr.com" },
  { id: "vultr-warsaw", name: "Warsaw", provider: "Vultr", lat: 52.2297, lng: 21.0122, endpoint: "https://waw-pl-ping.vultr.com" },

  // CoreWeave
  { id: "coreweave-las1", name: "Las Vegas", provider: "CoreWeave", lat: 36.1699, lng: -115.1398 },
  { id: "coreweave-ord1", name: "Chicago", provider: "CoreWeave", lat: 41.8781, lng: -87.6298 },
  { id: "coreweave-lga1", name: "New York", provider: "CoreWeave", lat: 40.7128, lng: -74.0060 },
];

