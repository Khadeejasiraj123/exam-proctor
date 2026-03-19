INSERT INTO
users(first_name, last_name, email, password,role,proof)
VALUES
('Eileen', 'Xue', 'eileen@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'proctor','/uploads/image.jpg'),
('YanBin', 'Yuan', 'yanbin@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'proctor','/uploads/image.jpg'),
('Roya', 'Chobineh', 'roya@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.','user','/uploads/image.jpg'),
('Alice', 'Smith', 'alice@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'proctor','/uploads/image.jpg'),
('Linda', 'Brown', 'linda@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'user','/uploads/image.jpg'),
('Susan', 'Johnson', 'susan@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'proctor','/uploads/image.jpg');


INSERT INTO
tests(type)
VALUES
('RC-101: Multiple Choice General Knowledge'),
('RC-201: Simple Web Development Test'),
('RC-301: Canadian Citizenship Test'),
('RC-401: Ontario Driving Licence Test'),
('YB-100: You think you know Toronto? '),
('YB-200: Ancient Olympics'),
('EX-101: Food Origins'),
('EX-500: Ultimate Tricks');



INSERT INTO
questions(test_id, question, answer1, answer2, answer3, answer4, correct_answer)
VALUES
(1, 'What is the longest that an elephant has ever lived? (That we know of)', '17 years', '49 years', '86 years', '142 years', '86 years'),
(1, 'How many rings are on the Olympic flag?', 'None', '4', '5', '7', '5'),
(1, 'In darts, what is the most points you can score with a single throw?', '20', '50', '60', '100', '60'),
(1, 'How many holes are on a standard bowling ball?', '2', '3', '5', '10', '3'),
(1, 'What are the main colors on the flag of Spain?', 'Black and yellow', 'Green and white', 'Blue and white', 'Red and yellow', 'Red and yellow'),
(2, 'What does console.log(...) do in the Node.js environment?', 'Logs a string to a file on local disk', 'Prints the given argument to the standard output, or terminal', 'Keeps the parameters in memory for later use', 'Ignores it unless it is configured to do something', 'Prints the given argument to the standard output, or terminal'),
(2, 'What is the difference to fork and clone a code repository?', 'Fork copies the repository on the server, and clone copies it to the local disk', 'Fork copies the repository to your local disk, and clone copies it remotely', 'There is no difference, they both duplicate the repo on the server', 'There is no difference, they both copy the repo to the local disk', 'Fork copies the repository on the server, and clone copies it to the local disk'),
(2, 'The functions createUser, or sendUserData are examples of which naming convention?', 'Snake case', 'Camel case', 'Quirky quarky', 'Hungarian notation', 'Camel case'),
(2, 'What is meant by type coercion?', 'When all data types are treated equally', 'When the operands of an operator are different types, one of them will be converted to an equivalent value of the other operand is type', 'When variables of different data types cannot be compared with one another', 'None of above', 'When the operands of an operator are different types, one of them will be converted to an equivalent value of the other operand is type'),
(3, 'Who governs Canada on a daily basis at the federal level?', 'Premier', 'Governor General', 'Prime Minister', 'The Queen', 'Prime Minister'),
(3, 'What region of Canada is known as the "Land of the Midnight Sun?"', 'Western Provinces', 'Northern Territories', 'Prairie Provinces', 'Atlantic Provinces', 'Northern Territories'),
(3, 'To which of the following communities do the majority of Canadians belong?', 'Jewish', 'Muslims', 'Christians', 'Hindu', 'Christians'),
(3, 'Which of the following criterion gives a Canadian the right to vote?', 'Being on the official voters’ list', 'Being an immigrant', 'Having a driver’s license', 'Owning a house', 'Being on the official voters’ list'),
(3, 'Of the following, what is a non-Canadian not allowed to do?', 'Vote in federal and provincial elections', 'Get health insurance', 'Get higher education', 'Own a house or a farm', 'Vote in federal and provincial elections'),
(4, 'When you decide to make a U-turn, you should first check_____.', 'Width of the road', 'The vehicle brakes', 'Traffic regulations', 'Turning radius of your vehicle', 'Traffic regulations'),
(4, 'Headlights and rear lights be seen from _________ metres away.', '50', '150', '200', '250', '150'),
(4, 'If a traffic signal changes while a pedestrian is still on the street, which of the following has the right-of-way?', 'The pedestrian', 'The driver making a turn', 'The driver coming from his/her right', 'The driver coming from his/her left', 'The pedestrian'),
(4, 'Motorcyclists are entitled to the use of_______.', 'Half a lane', 'A full lane', 'One-third of a lane', 'Two-thirds of a lane', 'A full lane'),
(4, 'You must be at least ___ years old and have a valid Ontario drivers licence to operate in Ontario.', '15', '16', '17', '18', '16'),
(5, 'which food franchise was founded in Toronto? ', 'Pizza Hut', 'Boston Pizza', 'Pizza Pizza', 'Dominos', 'Pizza Pizza'),
(5, 'For how many years, the CN Tower was the tallest freestanding structure in the World ', '12', '22', '32', '42', '32'),
(5, 'which stadium is the first in the world with a fully retractable roof', 'The Rogers Centre', 'Scotiabank Arena', 'Exhibition Stadium', 'BMO field', 'The Rogers Centre'),
(5, 'When was the last time Toronto Maple Leafs won Stanley Cup? ', '1947', '1967', '1987', '2007', '1967'),
(5, 'What is the lowest temperature that was recorded in Toronto?', '-43', '-40', '-33', '-30', '-33'),
(6, 'Which one of the following sports was not in the ancient Olympic Games?', 'Wrestling', 'Swimming', 'Running', 'Long Jump', 'Swimming'),
(6, 'The ancient Olympic Games was held once every how many years? ', '1', '2', '4', '8', '4'),
(6, 'The first written records of the ancient Olympic Games date to 776 B.C.. When did the ancient Olympic Games end?', '294B.C.', '94B.C.', '194A.D.', '394 A.D.', '394 A.D.'),
(6, 'Which one of the following statements is NOT correct?', 'There were no team sports at the ancient Olympics.', 'The games were to honour Zeus.', 'The winner will reiceve a medal.', 'There was no Olympic torch', 'The winner will reiceve a medal.'),
(7, 'Where was the caesar salad first invented in 1924?', 'Rome', 'Tijuana', 'New York', 'Manchester', 'Tijuana'),
(7, 'The most expensive coffee in the world is called the Kopi Luwak. How is it made? ', 'The coffee beans are digested by civet cats', 'The coffee beans are coated with saps from maple trees', 'The coffee beans are fermented in 56 types of spices', 'The coffee beans are infused with saliva from swiftlet birds', 'The coffee beans are digested by civet cats'),
(7, 'What Canadian dish was first popularized in Quebec? ', 'Nanaimo Bar', 'Beavertails', 'Poutine', 'Bannock', 'Poutine'),
(7, 'Where was the birth place of delicious cheesecakes? ', 'United States', 'Israel', 'Japan', 'Greece', 'Greece'),
(7, 'What country is responsible for the origins of French Fries? ', 'France', 'England', 'Belgium', 'Turkey', 'Belgium'),
(8, 'How many months have 28 days?', '1', '2', 'All of them', 'Depends if there is a leap year', 'All of them'),
(8, 'Divide 30 by half and add ten.', '40.5', '50', '70', '300', '70'),
(8, 'Johns father has three sons - Joseph I and Joseph II. Can you guess the name of the third son? ', 'Joseph III', 'Third', 'John', 'Henry', 'John'),
(8, 'You are 3rd place right now in a race. What place are you in when you pass the person in 2nd place?', '1st', '2nd', '3rd', '4th', '2nd'),
(8, 'You live in a one-story house made of redwood. What color are the stairs?', 'Brown', 'White', 'Red', 'None of the above', 'None of the above');


INSERT INTO
user_answers(test_id, question_id, user_id, response)
VALUES
(1, 1, 2, ''),
(1, 2, 2, ''),
(1, 3, 2, ''),
(1, 4, 2, ''),
(1, 5, 2, ''),
(2, 1, 3, ''),
(2, 2, 3, ''),
(2, 3, 3, ''),
(2, 4, 3, '');


-- INSERT INTO
-- appointments(user_id, test_id, is_proctor, start_date)
-- VALUES
-- (1, 1, True, '2021-11-03'),
-- (2, 1, False, '2021-11-03'),
-- (3, 2, False, '2021-11-20');


INSERT INTO
appointments(student_id, proctor_id, test_id, start_date, final_score)
VALUES
(4, 1, 7, '2021-11-26', 0.8),
(4, 1, 2, '2021-10-09', 0.75),
(4, 1, 3, '2021-11-30', 1.00),
(4, 1, 5, '2021-11-29', 0.8),
(4, 1, 1, '2021-12-03', NULL),
(4, 1, 4, '2021-12-05', NULL),
(3, 1, 2, '2021-11-26', 0.75),
(3, 1, 1, '2021-10-15', 0.6),
(3, 1, 4, '2021-11-03', 1.00),
(3, 1, 6, '2021-11-27', 0.5),
(3, 1, 3, '2021-12-03', NULL),
(3, 1, 7, '2021-12-13', NULL),
(3, 1, 8, '2021-12-15', NULL),

(2, 1, 7, '2021-12-06', NULL),
(2, 1, 5, '2021-12-06', NULL),
(2, 1, 3, '2021-12-15', NULL),
(2, 1, 4, '2021-11-05', 0.8),
(2, 1, 2, '2021-12-01', 0.75),
(2, 1, 6, '2021-10-26', 1.0),
(2, 1, 8, '2022-01-23', NULL),

(3, 1, 5, '2021-12-06', NULL),
(3, 1, 8, '2021-12-06', NULL),
(4, 1, 3, '2021-12-06', NULL),
(4, 1, 5, '2021-12-06', NULL);





