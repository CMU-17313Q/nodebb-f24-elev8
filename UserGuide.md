# ELEV8's User Guide

## User Story 1: Detection of inappropriate words

***As an instructor, I want the system to automatically detect and flag inappropriate words, so that the community stays respectful and focused.***

**Status:** Complete

**Acceptance Criteria:**  
1- The system checks each word in a user's post or reply against a predefined dictionary of inappropriate words.

2- If an inappropriate word is detected, the word is replaceed with asterisks. 

**How to test this feature:** 

1- Log into NodeBB

2- Choose one of the categories by clicking on one of them
  <img width="1088" alt="Screenshot 2024-10-18 at 5 47 34 PM" src="https://github.com/user-attachments/assets/05223a98-0111-4757-b3a1-daea3fddc8ac">

3- Create a new topic

4- Write anything that has an innapropriate word in the post content box and then press submit:
<img width="1270" alt="Screenshot 2024-10-18 at 5 40 17 PM" src="https://github.com/user-attachments/assets/82ce5d49-f027-4d18-afa8-68bc85cdb628">

5- If the word is in our dictionary of bad words, it will get censored and look like this:
 <img width="1359" alt="Screenshot 2024-10-18 at 5 41 39 PM" src="https://github.com/user-attachments/assets/cd1885e2-63bf-4549-a47c-d836848bb6d4">


## User Story 2: Anonymous posts

***As a user, I want the option to post anonymously to my instructors so that I can express my concerns openly without fear of repercussions.***

**Status:** Complete

**Acceptance Criteria:**  
1- The frontend should display an anonymous posting checkbox option, allowing users to submit posts without revealing their identity.

2- Ensure both backend and frontend integration to mask the user's identity while maintaining proper functionality of the post submission and display process.

**How to test this feature:**

1- On the NodeBB homepage, click on the "General Discussion" category (or any other relevant category where you want to post).

<img width="1243" alt="Screenshot 2024-10-18 at 10 18 20 PM" src="https://github.com/user-attachments/assets/ea764fb0-583e-48dd-863e-5506b0d5f689">


2- Once inside the chosen category, locate and click the "New Topic" button, usually found at the top or bottom of the page.

<img width="1238" alt="Screenshot 2024-10-18 at 10 21 31 PM" src="https://github.com/user-attachments/assets/19860cf2-ea51-45a5-b966-036023bf1554">


3- In the new topic form, look for the Anonymous checkbox located next to the Title input box. Click on the checkbox to enable anonymous posting.

Fill in the Title and Content of your post as usual. You can also attach files or add formatting if needed.

<img width="1231" alt="Screenshot 2024-10-18 at 10 22 31 PM" src="https://github.com/user-attachments/assets/beced73d-85c3-45d6-8a20-555b98f7d472">


4- After writing your post, click the Submit button to post it anonymously. Your post will now appear in the thread, and your identity will be hidden.

<img width="1231" alt="Screenshot 2024-10-18 at 10 23 45 PM" src="https://github.com/user-attachments/assets/6407c269-eb96-48c0-a5a5-75ec9539ae7d">
<img width="1230" alt="Screenshot 2024-10-18 at 10 24 19 PM" src="https://github.com/user-attachments/assets/1c6c39b5-4ece-4624-9d99-1a7d7faffe14">

**Note:** You can also use the anonymous posting feature to reply to existing topics or posts. Simply click the Reply button within any topic, check the Anonymous checkbox, and submit your reply anonymously. However, in this scenario, we are demonstrating the process for creating a new topic.


## User Story 3: Emoji Reactions in Chat Section

***As a user, I want to react to messages in the chat with a range of emojis to quickly express emotions and reactions without typing a response.***

**Status:** Incomplete

**Acceptance Criteria:**  
1- The task will be considered complete when the backend successfully tracks and stores emoji reactions for chat messages.

2- The feature must be seamlessly integrated with the existing chat structure and support multiple reactions per message. 

3- The task will be considered complete when all emojis are available in the chat reaction system.

**Progress:** We were only able to complete the frontend implementation of the emoji chat feature for this user story.

<img width="289" alt="Screenshot 2024-10-18 at 10 13 18 PM" src="https://github.com/user-attachments/assets/c3454b07-4a31-4bf8-96e3-152ffdf798c4">

**Justification:** While working on the backend logic for emoji reactions, we faced challenges with socket programming, which required real-time synchronization of reactions across multiple users in a chat room. This task involved advanced socket handling techniques beyond my current expertise. Additionally, integrating the emoji reactions into the existing chat system was more complex than expected due to dependencies on real-time updates and performance optimization across different browsers. Although we were able to implement the foundational parts of the feature, including the API endpoint and core logic for handling reactions, the complexity and scope of the task were too large to complete within a single sprint.

## User Story 4: Pre-defined Replies

***As a user, I want to be able to quickly respond to messages by clicking buttons with predefined replies so that I don't waste time typing out responses that are common.***

**Status:** Complete

**Acceptance Criteria:**  
1- The task will be complete when a clickable button is added to the user interface beside the regular reply button.

2- Clicking any of the predefined quick reply buttons results in the corresponding message being inserted into the quick reply text box. 

3- The existing file containing the buttons for replying and quick replying must be identified and integrated with the new feature.

**How to test this feature:**

1- 
