// AWS Terraform placeholder - customize for your deployment
provider "aws" {
  region = var.region
}

variable "region" {
  type = string
  default = "us-east-1"
}

resource "aws_s3_bucket" "artifacts" {
  bucket = "ai-architecture-artifacts-${random_id.bucket_id.hex}"
}

resource "random_id" "bucket_id" {
  byte_length = 4
}
