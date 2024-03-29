import re

pattern = r"[A-Z][a-z]+ism"
text = '''Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago. Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[29] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.[30] By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest.[31][32] Its evidence today is found in the hymns of the Rigveda. Preserved by a resolutely vigilant oral tradition, the Rigveda records the dawning of Hinduism in India.[33] The Dravidian languages of India were supplanted in the northern and western regions.[34] By 400 BCE, stratification and exclusion by caste had emerged within Hinduism,[35] and Buddhism and Jainism had arisen, proclaiming social orders unlinked to heredity.[36] Early political consolidations gave rise to the loose-knit Maurya and Gupta Empires based in the Ganges Basin.[37] Their collective era was suffused with wide-ranging creativity,[38] but also marked by the declining status of women,[39] and the incorporation of untouchability into an organised system of belief.[i][40] In South India, the Middle kingdoms exported Dravidian-languages scripts and religious cultures to the kingdoms of Southeast Asia.[41] '''

#The below method stops after 1st search, if we want to search for all occurences, we need finditer method
# match = re.search(pattern, text)
# print(match)

#For all occurences
matches = re.finditer(pattern, text)
for match in matches:
    print(match.span())
    print(text[match.span()[0]:match.span()[1]])