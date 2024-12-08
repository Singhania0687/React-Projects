variable "instance_type" {
  description = "Type of EC2 instance"
  type        = string
  default     = "t2.micro"   # Optional default value
}

variable "region" {
  description = "AWS region"
  type        = string 
}
