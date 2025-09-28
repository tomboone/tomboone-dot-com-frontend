locals {
  service_name = "tomboone-dot-com-frontend"
}

resource "azurerm_resource_group" "main" {
  name     = "${local.service_name}-rg"
  location = var.location
}

resource "azurerm_static_web_app" "main" {
  name                = local.service_name
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
}
