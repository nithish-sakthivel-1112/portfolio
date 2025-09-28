terraform {
  backend "s3" {
    bucket  = "terraform-state-bucket-nithish-v1"
    key     = "portfolio/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
