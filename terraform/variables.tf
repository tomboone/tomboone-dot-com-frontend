variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "East US"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "custom_domain" {
  description = "Custom domain name (optional)"
  type        = string
  default     = null
}