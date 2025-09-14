locals {
  service_name = "tomboone-dot-com-frontend"
}

data "azurerm_log_analytics_workspace" "existing" {
  name                = var.log_analytics_workspace_name
  resource_group_name = var.log_analytics_workspace_rg_name
}

resource "azurerm_resource_group" "main" {
  name     = "${local.service_name}-rg"
  location = var.location
}

resource "azurerm_application_insights" "main" {
  name                = "${local.service_name}-insights"
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  workspace_id        = data.azurerm_log_analytics_workspace.existing.id
  application_type    = "web"
}

resource "azurerm_static_web_app" "main" {
  name                = local.service_name
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location

  app_settings = {
    "VITE_API_BASE_URL" = var.api_base_url
  }
}
