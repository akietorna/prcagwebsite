import PySMS

ps = PySMS.PySMS(address="akietorna@gmail.com", password="hispresence123@", smtp_server="smtp.gmail.com", smtp_port="465", ssl=True)

ps.add_number("0509420432", "vodafone")

ps.text("This is an individual text")
ps.text("This is an individual text", number="0559420432")
