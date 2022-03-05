texto = open('write.txt', 'a')
texto.write('\nMarques - Sales') #\n para introduzir uma nova linha


"""
texto = open('write.txt', 'w') # Creates a new file but only with this text
texto.write('\nMarques - Sales') #\n para introduzir uma nova linha
texto.write('<p>This is Html</p>') # tb é possível introduzir HTML
"""




texto.close()