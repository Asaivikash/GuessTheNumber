import streamlit as st
import random

def main():
    st.title("Number Guessing Game")
    
    if "game_active" not in st.session_state:
        st.session_state.game_active = False
        st.session_state.attempts = 0
    
    if not st.session_state.game_active:
        mn = st.number_input("Enter the lower limit of the range:", value=1, step=1)
        mx = st.number_input("Enter the upper limit of the range:", value=100, step=1)
        
        if st.button("Start Game"):
            if mn < mx:
                st.session_state.mn = mn
                st.session_state.mx = mx
                st.session_state.num = random.randint(mn, mx)
                st.session_state.game_active = True
                st.session_state.attempts = 0
                st.success("Game started! Try guessing the number.")
            else:
                st.error("Lower limit must be less than upper limit.")
    
    if st.session_state.game_active:
        ch = st.number_input(f"Enter your number between {st.session_state.mn} and {st.session_state.mx}:", step=1)
        if st.button("Guess"):
            st.session_state.attempts += 1
            if st.session_state.mn <= ch <= st.session_state.mx:
                if ch > st.session_state.num:
                    st.warning("UMM, too big!")
                elif ch < st.session_state.num:
                    st.warning("Too small!")
                else:
                    st.success(f"You guessed it! It was {st.session_state.num}.")
                    st.success(f"Your guess is as sharp as a katana! You did it in {st.session_state.attempts} attempts.")
                    st.session_state.game_active = False
            else:
                st.error(f"Your guess is out of range! Guess between {st.session_state.mn} and {st.session_state.mx}.")

if __name__ == "__main__":
    main()
