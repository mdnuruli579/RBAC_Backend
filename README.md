# # RBAC_Backend
# APIs
Register user<br/> 
/api/auth/register<br/> 
Method type : Post<br/> 
Take Parameter: Json object { name (string), email(string), password(string) role}<br/> 
Role is defined as<br/> 
	Admin<br/> 
	Moderator<br/> 
	User<br/> 
Login user<br/> 
/api/auth/login<br/> 
Method type : Post<br/> 
Take Parameter : Json object {email(string), password(string)}<br/> 
Get List of User based on role <br/>
/api/users (This is for Admin)

