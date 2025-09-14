variable "location" {
  type        = string
  description = "Azure region for resources"
}
 variable "log_analytics_workspace_name" {
   type        = string
   description = "Existing log analytics workspace to use"
 }

variable "log_analytics_workspace_rg_name" {
  type        = string
  description = "Resource group of the existing log analytics workspace"
}

variable "api_base_url" {
  type = string
  description = "Base URL of the backend API"
}