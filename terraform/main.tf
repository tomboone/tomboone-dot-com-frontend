terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>4.44"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "main" {
  name     = "rg-tomboone-frontend"
  location = "East US"
}

resource "azurerm_static_site" "main" {
  name                = "swa-tomboone-frontend"
  resource_group_name = azurerm_resource_group.main.name
  location           = azurerm_resource_group.main.location
  sku_tier           = "Free"
  sku_size           = "Free"

  tags = {
    environment = "production"
    project     = "tomboone-frontend"
  }
}

# Optional: Custom domain
resource "azurerm_static_site_custom_domain" "main" {
  static_site_id  = azurerm_static_site.main.id
  domain_name     = "tomboone.com"
  validation_type = "cname-delegation"
}

output "static_web_app_url" {
  value = azurerm_static_site.main.default_host_name
}

output "static_web_app_id" {
  value = azurerm_static_site.main.id
}