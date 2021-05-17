@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist C:\Users\ramir\Downloads\XAMP\hypersonic\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\server\hsql-sample-database\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\ingres\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\ingres\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\mysql\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\mysql\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\postgresql\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\postgresql\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\apache\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\apache\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\openoffice\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\openoffice\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\apache-tomcat\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\apache-tomcat\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\resin\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\resin\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\jetty\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\jetty\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\subversion\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist C:\Users\ramir\Downloads\XAMP\lucene\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\lucene\scripts\ctl.bat START)
if exist C:\Users\ramir\Downloads\XAMP\third_application\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist C:\Users\ramir\Downloads\XAMP\third_application\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\third_application\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\lucene\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist C:\Users\ramir\Downloads\XAMP\subversion\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\subversion\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\jetty\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\jetty\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\hypersonic\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\resin\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\resin\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT C:\Users\ramir\Downloads\XAMP\apache-tomcat\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\openoffice\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\openoffice\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\apache\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\apache\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\ingres\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\ingres\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\mysql\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\mysql\scripts\ctl.bat STOP)
if exist C:\Users\ramir\Downloads\XAMP\postgresql\scripts\ctl.bat (start /MIN /B C:\Users\ramir\Downloads\XAMP\postgresql\scripts\ctl.bat STOP)

:end

