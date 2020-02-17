if [ -f local.env ]; then
  . local.env
else
  echo "You are missing a local.env file"
fi