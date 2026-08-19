function generateTerraformForAws(title) {
  return `# Terraform snippet for ${title} on AWS
provider "aws" {
  region = var.region
}

resource "aws_eks_cluster" "${title.toLowerCase().replace(/\s+/g,'_')}_eks" {
  name = "${title}-eks"
  # ... customize node groups, VPC, and IAM
}

resource "aws_db_instance" "${title.toLowerCase().replace(/\s+/g,'_')}_db" {
  engine = "postgres"
  instance_class = "db.t3.medium"
  allocated_storage = 20
}
`;
}

function generateTerraformForAzure(title) {
  return `# Terraform snippet for ${title} on Azure
provider "azurerm" {
  features = {}
}

resource "azurerm_kubernetes_cluster" "${title.toLowerCase().replace(/\s+/g,'_')}_aks" {
  name = "${title}-aks"
  location = var.location
  # ... customize node pools and RBAC
}

resource "azurerm_postgresql_server" "${title.toLowerCase().replace(/\s+/g,'_')}_db" {
  name = "${title}-postgres"
  sku_name = "B_Gen5_1"
}
`;
}

module.exports = { generateTerraformForAws, generateTerraformForAzure };
