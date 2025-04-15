import random

at=0
mn = int(input("Enter the lower limit of the range:"))
mx = int(input("Enter the lower limit of the range:"))
num = random.randint(mn,mx) 
while True:
    ch = int(input(f"Enter your number between {mn} and {mx}: "))  
    at+=1
    if mn <= ch <= mx:  
        if ch > num :
            print("UMM, too big!")
        elif ch < num:
            print("Too small!")
        else:
            print(f"You guessed it! It was {num}.")
            break  
    else:
        print(f"Your guess is way too off. Take a guess between {mn} and {mx}.")

print("Your guess is as sharp as a katana!")
print(f"We did it at {at} attempt")

