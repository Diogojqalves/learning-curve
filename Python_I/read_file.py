equipa = open("read.txt", "r") # read only function

"""
open("read_file.txt", "w") # write, change/add
open("read_file.txt", "a") # add, don t change
open("read_file.txt", "r+") # read and write
"""

print(equipa.readable()) # returns boolean if file is readable
#print(equipa.read())
#print(equipa.readlines()) # devolve dentro duma lista

for membro in equipa.readlines():
    print(membro)
# print(equipa.readline()) # lê a primeira linha
# print(equipa.readline()) # lê a segunda linha se a primeira estiver descomentada
equipa.close() #fechar o ficheiro

