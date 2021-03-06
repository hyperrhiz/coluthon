from unidecode import unidecode

def cleanfunnies(text):
	return ''.join([i if ord(i) >= 32 and ord(i) < 127 else '' for i in text])


def remove_non_ascii(text):
    return unidecode(unicode(text, encoding = "utf-8"))
    
    
    
    
if __name__ == '__main__':
	
	with open('semicon.txt') as f:
            text = f.read()
        with open('cleaned.txt', 'a') as f:
            f.write(remove_non_ascii(text))
