class Duck(object):
    
    def __init__(self, name):
        self.name = name
        
    def quack(self):
        print('Quack! I am', self.name)
        
        
d = Duck("Donald")
d.quack()

Duck.squaraquack = lambda self: print('Squaraquack! I am', self.name)

d.squaraquack()
