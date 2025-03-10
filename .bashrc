# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi
alias mongogo='mongo mongodb://ammarsaad95:1346798520@iad2-c12-1.mongo.objectrocket.com:52550,iad2-c12-2.mongo.objectrocket.com:52550,iad2-c12-0.mongo.objectrocket.com:52550/Redeemly?replicaSet=01ac41853ef54d19a7c1da8c07d808d6'
alias mongogo-test='mongo mongodb://root:_%3A74C.W%5E7vhr%2Fr%28q@iad2-c12-1.mongo.objectrocket.com:52550,iad2-c12-2.mongo.objectrocket.com:52550,iad2-c12-0.mongo.objectrocket.com:52550/RedeemlyTest?replicaSet=01ac41853ef54d19a7c1da8c07d808d6'

# User specific aliases and functions
#export VOUCHER_DATABASE_CONNECTION_STRING=DATABASE_CONNECTION
#export VOUCHER_DATABASE_USERNAME=admin
#export VOUCHER_DATABASE_PASSWORD=admin%40pass.word
#export VOUCHER_DATABASE_HOST=cluster0-gnlu6.mongodb.net
#export VOUCHER_DATABASE_NAME=cluster0
#export VOUCHER_JWT_SECRET=mwoiemfoiwneff30f3oin4foim023jm09
#export VOUCHER_ISSUER=localhost:3000
#export VOUCHER_API_KEY_LENGTH=40


export VOUCHER_DATABASE_CONNECTION_STRING=DATABASE_CONNECTION
export VOUCHER_DATABASE_USERNAME=ammarsaad95
export VOUCHER_DATABASE_PASSWORD=1346798520
export VOUCHER_DATABASE_HOST='iad2-c12-1.mongo.objectrocket.com:52550,iad2-c12-2.mongo.objectrocket.com:52550,iad2-c12-0.mongo.objectrocket.com:52550'
export VOUCHER_DATABASE_NAME=Redeemly
export VOUCHER_JWT_SECRET=mwoiemfoiwneff30f3oin4foim023jm09
export VOUCHER_ISSUER=localhost:3000
export VOUCHER_API_KEY_LENGTH=40
export VOUCHER_DATABASE_CONNECTION_OPTIONS='replicaSet=01ac41853ef54d19a7c1da8c07d808d6&readPreference=secondary'
. "/home/ec2-user/.acme.sh/acme.sh.env"

#user defined alias
alias show-log='tail -f /home/ec2-user/.pm2/pm2.log'


export TEST_VOUCHER_DATABASE_USERNAME=root
export TEST_VOUCHER_DATABASE_PASSWORD=_%3A74C.W%5E7vhr%2Fr%28q
export TEST_VOUCHER_DATABASE_HOST='iad2-c12-1.mongo.objectrocket.com:52550,iad2-c12-2.mongo.objectrocket.com:52550,iad2-c12-0.mongo.objectrocket.com:52550'
export TEST_VOUCHER_DATABASE_NAME=RedeemlyTest
export TEST_VOUCHER_DATABASE_CONNECTION_OPTIONS='replicaSet=01ac41853ef54d19a7c1da8c07d808d6&readPreference=secondary'

 
export REDEMPTION_API_URL='http://3.22.205.87:3214'
export REDEMPTION_ADMIN_API_KEY='b63a9a64d8f224a395426f79ab39709f3f3534fb61be1856876f9b1dcd9ca086c32a6b99bc130fa9'


export INFLUENCER_CODE_INFLUENCER_BASE_URL='http://3.22.205.87:3214/influencer'
export INFLUENCER_CODE_API_KEY='b63a9a64d8f224a395426f79ab39709f3f3534fb61be1856876f9b1dcd9ca086c32a6b99bc130fa9'
export INFLUENCER_CODE_PACKAGE_BASE_URL='http://3.22.205.87:3214/anonymous-packages'
export INFLUENCER_CODE_REDEMPTION_BASE_URL='http://3.22.205.87:4100'

export NODE_OPTIONS=--max_old_space_size=4096
