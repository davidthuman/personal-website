echo Updating PocketBase database files from home machine to Linode machine

scp -r database/pb_data/* david@23.239.16.103:./database/pb_data/