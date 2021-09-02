/*
 * © 2021 Thoughtworks, Inc.
 */

export const unknownsReclassification: string[][] = [
  ['Out Bandwidth', 'bytes', 'Networking'],
  ['Out Bandwidth Sydney', 'bytes', 'Networking'],
  ['Out Bandwidth Mumbai', 'bytes', 'Networking'],
  ['Out Bandwidth Los Angeles', 'bytes', 'Networking'],
  ['Out Bandwidth Northern Virginia', 'bytes', 'Networking'],
  ['Out Bandwidth Sao Paulo', 'bytes', 'Networking'],
  ['Backend Instances', 'seconds', 'Compute'],
  ['Backend Instances Los Angeles', 'seconds', 'Compute'],
  ['Backend Instances Mumbai', 'seconds', 'Compute'],
  ['Frontend Instances', 'seconds', 'Compute'],
  ['Backend Instances Northern Virginia', 'seconds', 'Compute'],
  ['Frontend Instances Sao Paulo', 'seconds', 'Compute'],
  ['Frontend Instances Northern Virginia', 'seconds', 'Compute'],
  ['Frontend Instances Los Angeles', 'seconds', 'Compute'],
  ['Frontend Instances London', 'seconds', 'Compute'],
  ['Frontend Instances Mumbai', 'seconds', 'Compute'],
  ['Analysis', 'bytes', 'Compute'],
  ['Streaming Insert', 'bytes', 'Compute'],
  ['BigQuery Storage API - Read', 'bytes', 'Networking'],
  ['Server Node', 'seconds', 'Compute'],
  ['Build time', 'seconds', 'Compute'],
  ['Data Fusion Basic', 'seconds', 'Unknown'],
  ['Data Fusion Developer', 'seconds', 'Unknown'],
  ['Content Bytes Inspected', 'bytes', 'Compute'],
  ['Content Bytes Transformed', 'bytes', 'Compute'],
  ['Shuffle chargeable data processed for Iowa', 'bytes', 'Compute'],
  ['ManagedZone', 'seconds', 'Unknown'],
  ['Device Data Volume', 'bytes', 'Storage'],
  ['Active software symmetric key versions', 'seconds', 'Compute'],
  ['Active software asymmetric key versions', 'seconds', 'Compute'],
  ['Message Delivery Basic', 'bytes', 'Networking'],
  ['Subscriptions message backlog', 'byte-seconds', 'Storage'],
  ['Memory Allocation Time', 'byte-seconds', 'Memory'],
  ['Memory Allocation Time (tier 2)', 'byte-seconds', 'Memory'],
  [
    'Cloud Run Network Inter Region Egress Intercontinental (Excl Oceania)',
    'bytes',
    'Networking',
  ],
  [
    'Cloud Run Network Internet Egress Intercontinental (Excl Oceania and China)',
    'bytes',
    'Networking',
  ],
  ['Cloud Run GOOGLE-API Egress', 'bytes', 'Networking'],
  ['Cloud Run Network Intra Region Egress', 'bytes', 'Networking'],
  [
    'Cloud Run Network Inter Region Egress North America to North America',
    'bytes',
    'Networking',
  ],
  [
    'Cloud Run Network Internet Egress North America to North America',
    'bytes',
    'Networking',
  ],
  [
    'Cloud Run Network Egress via Carrier Peering Network - North America Based',
    'bytes',
    'Networking',
  ],
  [
    'Cloud Run Network Internet Egress Intercontinental from/to Oceania',
    'bytes',
    'Networking',
  ],
  ['Idle Min-Instance CPU Allocation Time', 'seconds', 'Compute'],
  ['CPU Allocation Time', 'seconds', 'Compute'],
  ['CPU Allocation Time (tier 2)', 'seconds', 'Compute'],
  [
    'Cloud Run Network Inter Region Egress AsiaPacfic to AsiaPacfic',
    'bytes',
    'Networking',
  ],
  [
    'Cloud Run Network Internet Egress Intercontinental to China',
    'bytes',
    'Networking',
  ],
  [
    'Cloud Run Network Internet Egress AsiaPacfic to AsiaPacfic',
    'bytes',
    'Networking',
  ],
  ['Cloud Run Network Internet Egress Europe to Europe', 'bytes', 'Networking'],
  ['Idle Min-Instance Memory Allocation Time', 'byte-seconds', 'Memory'],
  [
    'Server Node for Regional Configuration (Mumbai, India)',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - Micro instance in Mumbai',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Regional - Small instance in EMEA',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - Small instance in EMEA',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - Small instance in Americas',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - Micro instance in Northern Virginia',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Regional - Small instance in Americas',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - Small instance in Northern Virginia',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - Micro instance in EMEA',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - IP address reservation in Americas',
    'seconds',
    'Unknown',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - IP address reservation in Hong Kong',
    'seconds',
    'Unknown',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - Micro instance in Singapore',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - Micro instance in Americas',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for MySQL: Zonal - Micro instance in Americas',
    'seconds',
    'Compute',
  ],
  [
    'Cloud SQL for MySQL: Zonal - IP address reservation in Americas',
    'seconds',
    'Unknown',
  ],
  [
    'Cloud SQL for PostgreSQL: Regional - IP address reservation in Americas',
    'seconds',
    'Unknown',
  ],
  [
    'Cloud SQL for MySQL: Zonal - IP address reservation in Los Angeles',
    'seconds',
    'Unknown',
  ],
  [
    'Cloud SQL for PostgreSQL: Zonal - IP address reservation in Northern Virginia',
    'seconds',
    'Unknown',
  ],
  ['Cloud SQL: Backups in Northern Virginia', 'byte-seconds', 'Storage'],
  ['Cloud SQL: Backups in Mumbai', 'byte-seconds', 'Storage'],
  ['Cloud SQL: Backups in Hong Kong', 'byte-seconds', 'Storage'],
  ['Cloud SQL: Backups in Los Angeles', 'byte-seconds', 'Storage'],
  ['Coldline Data Retrieval', 'bytes', 'Compute'],
  ['Nearline Data Retrieval', 'bytes', 'Compute'],
  ['Archive Data Retrieval', 'bytes', 'Compute'],
  ['Cloud Armor Policy Charge', 'seconds', 'Unknown'],
  ['NAT Gateway: Uptime charge in Iowa', 'seconds', 'Compute'],
  ['Cloud Armor Rule Charge', 'seconds', 'Compute'],
  ['NAT Gateway: Uptime charge in Hong Kong', 'seconds', 'Compute'],
  ['NAT Gateway: Uptime charge in Oregon', 'seconds', 'Compute'],
  ['NAT Gateway: Data processing charge in Oregon', 'bytes', 'Compute'],
  ['NAT Gateway: Data processing charge in Iowa', 'bytes', 'Compute'],
  ['NAT Gateway: Data processing charge in Hong Kong', 'bytes', 'Compute'],
  ['Commit (1 year)', 'seconds', 'Unknown'],
  ['Zonal Kubernetes Clusters', 'seconds', 'Compute'],
  ['Regional Kubernetes Clusters', 'seconds', 'Compute'],
  ['Autopilot Kubernetes Clusters', 'seconds', 'Compute'],
  ['Autopilot Pod mCPU Requests (us-central1)', 'seconds', 'Compute'],
  [
    'Autopilot Pod Ephemeral Storage Requests (us-central1)',
    'byte-seconds',
    'Storage',
  ],
  ['Autopilot Pod Memory Requests (us-central1)', 'byte-seconds', 'Memory'],
  ['Secret version replica storage', 'seconds', 'Storage'],
  ['Email Pro 100k plan', 'seconds', 'Unknown'],
  ['Log Volume', 'bytes', 'Storage'],
  ['Metric Volume', 'bytes', 'Storage'],
  ['GCP Support (Production role)', 'seconds', 'Unknown'],
  ['GCP Support (Development role)', 'seconds', 'Unknown'],
]
