set appname=%~n0

copy buildscript\makexpi.sh .\
bash makexpi.sh -n %appname% -o version=0
del makexpi.sh
