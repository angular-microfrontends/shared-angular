@ECHO OFF
REM Penguins can't fly

SET ACTION=%1
FOR /f "usebackq tokens=1*" %%i IN (`echo %*`) DO @ SET params=%%j

FOR /f "delims=" %%D IN ('DIR projects /a:d /b') DO (
	ECHO ========== %%~nxD ==========
	ECHO ng %ACTION% %%~nxD %params%
	ECHO.
	ng %ACTION% %%~nxD %params%
	ECHO.
)