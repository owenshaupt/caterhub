json.extract! @user, :id, :email, :first_name, :last_name

json.company @user.company, :id, :name