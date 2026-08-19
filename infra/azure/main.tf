// Azure Terraform placeholder - customize for your deployment
provider "azurerm" {
  features = {}
}

variable "location" {
  type = string
  default = "East US"
}

resource "azurerm_resource_group" "rg" {
  name     = "ai-architecture-rg"
  location = var.location
}
