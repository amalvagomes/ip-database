var search_data = {"index":{"searchIndex":["applicationcontroller","applicationhelper","devicetype","devicetypescontroller","devicetypeshelper","dhcprange","dhcprangescontroller","dhcprangeshelper","dnsdeviceassoc","dnsdeviceassocscontroller","dnsdeviceassocshelper","dnsipjoin","ipaddress","ipaddressescontroller","ipaddresseshelper","network","networkscontroller","networkshelper","notification","notificationscontroller","notificationshelper","address_count()","assignable?()","autocomplete()","child_networks()","create()","create()","create()","create()","create()","create()","datatable()","datatable()","datatable()","datatable()","datatable()","destroy()","destroy()","destroy()","destroy()","destroy()","destroy()","edit()","edit()","edit()","edit()","edit()","edit()","end_ip()","end_ip=()","has_parent?()","index()","index()","index()","index()","index()","index()","index()","ip_str()","ip_str=()","ip_v4()","ip_v4=()","ip_v4=()","ip_v4?()","ip_v6()","ip_v6=()","ip_v6?()","maccheck()","netmask()","netmask=()","network_no()","network_no=()","new()","new()","new()","new()","new()","new()","num_dhcp_ranges()","num_ip()","num_ip_assigned()","num_ip_free()","num_static_ip()","session_update()","show()","show()","show()","show()","show()","show()","start_ip()","start_ip=()","to_range()","update()","update()","update()","update()","update()","update()","valid_ip?()","readme_for_app"],"longSearchIndex":["applicationcontroller","applicationhelper","devicetype","devicetypescontroller","devicetypeshelper","dhcprange","dhcprangescontroller","dhcprangeshelper","dnsdeviceassoc","dnsdeviceassocscontroller","dnsdeviceassocshelper","dnsipjoin","ipaddress","ipaddressescontroller","ipaddresseshelper","network","networkscontroller","networkshelper","notification","notificationscontroller","notificationshelper","dhcprange#address_count()","network#assignable?()","dnsdeviceassocscontroller#autocomplete()","network#child_networks()","devicetypescontroller#create()","dhcprangescontroller#create()","dnsdeviceassocscontroller#create()","ipaddressescontroller#create()","networkscontroller#create()","notificationscontroller#create()","devicetypescontroller#datatable()","dhcprangescontroller#datatable()","dnsdeviceassocscontroller#datatable()","ipaddressescontroller#datatable()","networkscontroller#datatable()","devicetypescontroller#destroy()","dhcprangescontroller#destroy()","dnsdeviceassocscontroller#destroy()","ipaddressescontroller#destroy()","networkscontroller#destroy()","notificationscontroller#destroy()","devicetypescontroller#edit()","dhcprangescontroller#edit()","dnsdeviceassocscontroller#edit()","ipaddressescontroller#edit()","networkscontroller#edit()","notificationscontroller#edit()","dhcprange#end_ip()","dhcprange#end_ip=()","ipaddress#has_parent?()","applicationcontroller#index()","devicetypescontroller#index()","dhcprangescontroller#index()","dnsdeviceassocscontroller#index()","ipaddressescontroller#index()","networkscontroller#index()","notificationscontroller#index()","ipaddress#ip_str()","ipaddress#ip_str=()","ipaddress#ip_v4()","ipaddress#ip_v4=()","network#ip_v4=()","ipaddress#ip_v4?()","ipaddress#ip_v6()","ipaddress#ip_v6=()","ipaddress#ip_v6?()","ipaddressescontroller#maccheck()","network#netmask()","network#netmask=()","network#network_no()","network#network_no=()","devicetypescontroller#new()","dhcprangescontroller#new()","dnsdeviceassocscontroller#new()","ipaddressescontroller#new()","networkscontroller#new()","notificationscontroller#new()","network#num_dhcp_ranges()","network#num_ip()","network#num_ip_assigned()","network#num_ip_free()","network#num_static_ip()","applicationcontroller#session_update()","devicetypescontroller#show()","dhcprangescontroller#show()","dnsdeviceassocscontroller#show()","ipaddressescontroller#show()","networkscontroller#show()","notificationscontroller#show()","dhcprange#start_ip()","dhcprange#start_ip=()","dhcprange#to_range()","devicetypescontroller#update()","dhcprangescontroller#update()","dnsdeviceassocscontroller#update()","ipaddressescontroller#update()","networkscontroller#update()","notificationscontroller#update()","ipaddress#valid_ip?()",""],"info":[["ApplicationController","","ApplicationController.html","","<p>Class which makes the representation of the IP-Database page.  This class\nprovides user an option to …\n"],["ApplicationHelper","","ApplicationHelper.html","","<p>Helpers are snippets of code that can be called in your views to help keep\nyour code DRY - i.e. Any code …\n"],["DeviceType","","DeviceType.html","","<p>Place for a user to add the Device Type names, times when they were created\nand updated\n"],["DeviceTypesController","","DeviceTypesController.html","","<p>Class which populates the table for the Device Types using either JSON or\nHTML.  Options: Show, Edit …\n"],["DeviceTypesHelper","","DeviceTypesHelper.html","","<p>Helpers are snippets of code that can be called in your views to help keep\nyour code DRY - i.e. Any code …\n"],["DhcpRange","","DhcpRange.html","","<p>Acquire IP addresses to configure the host class\n"],["DhcpRangesController","","DhcpRangesController.html","","<p>A DHCP scope is a valid range of IP addresses which are available for\nassignments or lease to client …\n"],["DhcpRangesHelper","","DhcpRangesHelper.html","","<p>Helpers are snippets of code that can be called in your views to help keep\nyour code DRY - i.e. Any code …\n"],["DnsDeviceAssoc","","DnsDeviceAssoc.html","","<p>Schema Information\n<p>Table name: dns_device_assocs\n\n<pre>id         :integer          not null, primary key\nname ...</pre>\n"],["DnsDeviceAssocsController","","DnsDeviceAssocsController.html","","<p>A Domain Name Service resolves queries for domain names into IP addresses \nfor the purpose of locating …\n"],["DnsDeviceAssocsHelper","","DnsDeviceAssocsHelper.html","","<p>Helpers are snippets of code that can be called in your views to help keep\nyour code DRY - i.e. Any code …\n"],["DnsIpJoin","","DnsIpJoin.html","","<p>Class that allows many to many relationship between IP addresses and DNS\ndevices.\n"],["IpAddress","","IpAddress.html","","\n<pre>== Schema Information\n\nTable name: ip_addresses\n\n id             :integer          not null, primary ...</pre>\n"],["IpAddressesController","","IpAddressesController.html","","<p>Class which populates the table for the IP addresses using either JSON or\nHTML. This class includes the …\n"],["IpAddressesHelper","","IpAddressesHelper.html","","<p>Helpers are snippets of code that can be called in your views to help keep\nyour code DRY - i.e. Any code …\n"],["Network","","Network.html","","<p>Schema Information\n<p>Table name: networks\n\n<pre>id             :integer          not null, primary key\nname    ...</pre>\n"],["NetworksController","","NetworksController.html","","<p>Class which populates the table for the Networks using either JSON or HTML\nformat. This class includes …\n"],["NetworksHelper","","NetworksHelper.html","","<p>Helpers are snippets of code that can be called in your views to help keep\nyour code DRY - i.e. Any code …\n"],["Notification","","Notification.html","","<p>Schema Information\n<p>Table name: notifications\n\n<pre>id         :integer          not null, primary key\nname   ...</pre>\n"],["NotificationsController","","NotificationsController.html","","<p>Class which using either JSON or HTML format creates an option for a user\nto create a notification or …\n"],["NotificationsHelper","","NotificationsHelper.html","","<p>Helpers are snippets of code that can be called in your views to help keep\nyour code DRY - i.e. Any code …\n"],["address_count","DhcpRange","DhcpRange.html#method-i-address_count","()","<p>returns number of addresses in range\n"],["assignable?","Network","Network.html#method-i-assignable-3F","(ip)",""],["autocomplete","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-autocomplete","()","<p>GET /dns/autocomplete.json\n"],["child_networks","Network","Network.html#method-i-child_networks","()","<p>Returns the network to which it is a parent\n"],["create","DeviceTypesController","DeviceTypesController.html#method-i-create","()","<p>POST /device_types POST /device_types.json\n"],["create","DhcpRangesController","DhcpRangesController.html#method-i-create","()","<p>POST /dhcp_ranges POST /dhcp_ranges.json\n"],["create","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-create","()","<p>POST /dns_device_assocs POST /dns_device_assocs.json\n"],["create","IpAddressesController","IpAddressesController.html#method-i-create","()","<p>POST /ip_addresses POST /ip_addresses.json\n"],["create","NetworksController","NetworksController.html#method-i-create","()","<p>POST /networks POST /networks.json\n"],["create","NotificationsController","NotificationsController.html#method-i-create","()","<p>POST /notifications POST /notifications.json\n"],["dataTable","DeviceTypesController","DeviceTypesController.html#method-i-dataTable","()","<p>POST /dt/dataTable.json\n"],["dataTable","DhcpRangesController","DhcpRangesController.html#method-i-dataTable","()","<p>POST /dhcp/dataTable.json\n"],["dataTable","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-dataTable","()","<p>POST /dns/dataTable.json\n"],["dataTable","IpAddressesController","IpAddressesController.html#method-i-dataTable","()","<p>POST /ip/dataTable.json\n"],["dataTable","NetworksController","NetworksController.html#method-i-dataTable","()","<p>POST /net/dataTable.json\n"],["destroy","DeviceTypesController","DeviceTypesController.html#method-i-destroy","()","<p>DELETE /device_types/1 DELETE /device_types/1.json\n"],["destroy","DhcpRangesController","DhcpRangesController.html#method-i-destroy","()","<p>DELETE /dhcp_ranges/1 DELETE /dhcp_ranges/1.json\n"],["destroy","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-destroy","()","<p>DELETE /dns_device_assocs/1 DELETE /dns_device_assocs/1.json\n"],["destroy","IpAddressesController","IpAddressesController.html#method-i-destroy","()","<p>DELETE /ip_addresses/1 DELETE /ip_addresses/1.json\n"],["destroy","NetworksController","NetworksController.html#method-i-destroy","()","<p>DELETE /networks/1 DELETE /networks/1.json\n"],["destroy","NotificationsController","NotificationsController.html#method-i-destroy","()","<p>DELETE /notifications/1 DELETE /notifications/1.json\n"],["edit","DeviceTypesController","DeviceTypesController.html#method-i-edit","()","<p>GET /device_types/1/edit\n"],["edit","DhcpRangesController","DhcpRangesController.html#method-i-edit","()","<p>GET /dhcp_ranges/1/edit\n"],["edit","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-edit","()","<p>GET /dns_device_assocs/1/edit\n"],["edit","IpAddressesController","IpAddressesController.html#method-i-edit","()","<p>GET /ip_addresses/1/edit\n"],["edit","NetworksController","NetworksController.html#method-i-edit","()","<p>GET /networks/1/edit\n"],["edit","NotificationsController","NotificationsController.html#method-i-edit","()","<p>GET /notifications/1/edit\n"],["end_ip","DhcpRange","DhcpRange.html#method-i-end_ip","()","<p>Returns the string representation of the End IP\n"],["end_ip=","DhcpRange","DhcpRange.html#method-i-end_ip-3D","(attr)","<p>Assignment of the string the End Ip for the database\n"],["has_parent?","IpAddress","IpAddress.html#method-i-has_parent-3F","()","<p>Returns true if network exists or false if doesn’t\n"],["index","ApplicationController","ApplicationController.html#method-i-index","()","<p>Contains information for the front page. Allows the user to create a\nnotification if needed. Also shows …\n"],["index","DeviceTypesController","DeviceTypesController.html#method-i-index","()","<p>GET /device_types GET /device_types.json\n"],["index","DhcpRangesController","DhcpRangesController.html#method-i-index","()","<p>GET /dhcp_ranges GET /dhcp_ranges.json\n"],["index","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-index","()","<p>GET /dns_device_assocs GET /dns_device_assocs.json\n"],["index","IpAddressesController","IpAddressesController.html#method-i-index","()","<p>GET /ip_addresses GET /ip_addresses.json\n"],["index","NetworksController","NetworksController.html#method-i-index","()","<p>GET /networks GET /networks.json\n"],["index","NotificationsController","NotificationsController.html#method-i-index","()","<p>GET /notifications GET /notifications.json\n"],["ip_str","IpAddress","IpAddress.html#method-i-ip_str","()","<p>Returns string representation of either IP v4 or IP v6\n"],["ip_str=","IpAddress","IpAddress.html#method-i-ip_str-3D","(ip_in)","<p>Assigns value to IP address\n"],["ip_v4","IpAddress","IpAddress.html#method-i-ip_v4","()","<p>Getting values for the IP v4\n"],["ip_v4=","IpAddress","IpAddress.html#method-i-ip_v4-3D","(new_ip)","<p>Assignment override setting values for the IP v4\n"],["ip_v4=","Network","Network.html#method-i-ip_v4-3D","()",""],["ip_v4?","IpAddress","IpAddress.html#method-i-ip_v4-3F","()","<p>Checks if the IP v4 version\n"],["ip_v6","IpAddress","IpAddress.html#method-i-ip_v6","()","<p>Getting values for the IP v6\n"],["ip_v6=","IpAddress","IpAddress.html#method-i-ip_v6-3D","(new_ip)","<p>Assignment override setting values for the IP v6\n"],["ip_v6?","IpAddress","IpAddress.html#method-i-ip_v6-3F","()","<p>Checks if the IPv6 version\n"],["macCheck","IpAddressesController","IpAddressesController.html#method-i-macCheck","()","<p>POST /ip/macCheck.json\n"],["netmask","Network","Network.html#method-i-netmask","()","<p>Getting values for the netmask in string representation\n"],["netmask=","Network","Network.html#method-i-netmask-3D","(new_ip)","<p>Assignment override setting values for the netmask\n"],["network_no","Network","Network.html#method-i-network_no","()","<p>Getting values for the network in string representation\n"],["network_no=","Network","Network.html#method-i-network_no-3D","(new_ip)","<p>Assignment override setting values for the network\n"],["new","DeviceTypesController","DeviceTypesController.html#method-i-new","()","<p>GET /device_types/new GET /device_types/new.json\n"],["new","DhcpRangesController","DhcpRangesController.html#method-i-new","()","<p>GET /dhcp_ranges/new GET /dhcp_ranges/new.json\n"],["new","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-new","()","<p>GET /dns_device_assocs/new GET /dns_device_assocs/new.json\n"],["new","IpAddressesController","IpAddressesController.html#method-i-new","()","<p>GET /ip_addresses/new GET /ip_addresses/new.json\n"],["new","NetworksController","NetworksController.html#method-i-new","()","<p>GET /networks/new GET /networks/new.json\n"],["new","NotificationsController","NotificationsController.html#method-i-new","()","<p>GET /notifications/new GET /notifications/new.json\n"],["num_dhcp_ranges","Network","Network.html#method-i-num_dhcp_ranges","()",""],["num_ip","Network","Network.html#method-i-num_ip","()","<p>Returns total number of the IP addresses within the network\n"],["num_ip_assigned","Network","Network.html#method-i-num_ip_assigned","()","<p>Returns the number of IP Addresses/DHCP Range Sizes in a network Or returns\nthe same for all child networks …\n"],["num_ip_free","Network","Network.html#method-i-num_ip_free","()","<p>Getting number of IP that are free\n"],["num_static_ip","Network","Network.html#method-i-num_static_ip","()",""],["session_update","ApplicationController","ApplicationController.html#method-i-session_update","()","<p>Updates the times of the last session and recent changes\n"],["show","DeviceTypesController","DeviceTypesController.html#method-i-show","()","<p>GET /device_types/1 GET /device_types/1.json\n"],["show","DhcpRangesController","DhcpRangesController.html#method-i-show","()","<p>GET /dhcp_ranges/1 GET /dhcp_ranges/1.json\n"],["show","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-show","()","<p>GET /dns_device_assocs/1 GET /dns_device_assocs/1.json\n"],["show","IpAddressesController","IpAddressesController.html#method-i-show","()","<p>GET /ip_addresses/1 GET /ip_addresses/1.json\n"],["show","NetworksController","NetworksController.html#method-i-show","()","<p>GET /networks/1 GET /networks/1.json\n"],["show","NotificationsController","NotificationsController.html#method-i-show","()","<p>GET /notifications/1 GET /notifications/1.json\n"],["start_ip","DhcpRange","DhcpRange.html#method-i-start_ip","()","<p>Returns the string representation of the Start IP\n"],["start_ip=","DhcpRange","DhcpRange.html#method-i-start_ip-3D","(attr)","<p>Assignment of the string the Start Ip for the database\n"],["to_range","DhcpRange","DhcpRange.html#method-i-to_range","()",""],["update","DeviceTypesController","DeviceTypesController.html#method-i-update","()","<p>PUT /device_types/1 PUT /device_types/1.json\n"],["update","DhcpRangesController","DhcpRangesController.html#method-i-update","()","<p>PUT /dhcp_ranges/1 PUT /dhcp_ranges/1.json\n"],["update","DnsDeviceAssocsController","DnsDeviceAssocsController.html#method-i-update","()","<p>PUT /dns_device_assocs/1 PUT /dns_device_assocs/1.json\n"],["update","IpAddressesController","IpAddressesController.html#method-i-update","()","<p>PUT /ip_addresses/1 PUT /ip_addresses/1.json\n"],["update","NetworksController","NetworksController.html#method-i-update","()","<p>PUT /networks/1 PUT /networks/1.json\n"],["update","NotificationsController","NotificationsController.html#method-i-update","()","<p>PUT /notifications/1 PUT /notifications/1.json\n"],["valid_ip?","IpAddress","IpAddress.html#method-i-valid_ip-3F","()","<p>Returns the validity of this model checked against the rules of networking\nIf and only if the address …\n"],["README_FOR_APP","","doc/README_FOR_APP.html","","<p>\n<p>IPv6 and IPv4 Database system\n<p>\n"]]}}