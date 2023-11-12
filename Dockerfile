FROM amazonlinux:latest

RUN yum update -y
RUN yum upgrade -y
RUN yum install systemd httpd -y

RUN systemctl enable httpd
CMD ["/sbin/init"]

