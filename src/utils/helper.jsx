var nameList = [
    'Aarav', 'Vivaan', 'Aditya', 'Krishna', 'Aryan', 'Kabir', 'Rohan', 'Ishaan', 'Arjun',
    'Dev', 'Om', 'Yash', 'Kunal', 'Siddharth', 'Rahul', 'Ravi', 'Ankit', 'Neeraj',
    'Veer', 'Raj', 'Raja', 'Manish', 'Pranav', 'Kartik', 'Raghav', 'Harsh', 'Nikhil',
    'Varun', 'Abhishek', 'Ayaan', 'Samar', 'Tanish', 'Aman', 'Sahil', 'Ritesh', 'Sumit',

    'Priya', 'Ananya', 'Diya', 'Isha', 'Sneha', 'Kavya', 'Meera', 'Saanvi', 'Radha',
    'Lakshmi', 'Durga', 'Gauri', 'Pooja', 'Shreya', 'Nisha', 'Ritu', 'Neha', 'Rani',
    'Ira', 'Tanya', 'Mira', 'Aishwarya', 'Juhi', 'Bhavana', 'Swati', 'Nandini', 'Pallavi',
    'Trisha', 'Rekha', 'Sunita', 'Deepa', 'Leela', 'Kriti', 'Divya', 'Smita', 'Jaya'
];


const commentTexts = [
    "Loved this video!",
    "Great explanation 👏",
    "Can you make a tutorial on this?",
    "This helped me a lot, thanks!",
    "Subscribed! Waiting for more videos.",
    "You deserve more views 🔥",
    "Wow! So simple and clear.",
    "I didn't understand the last part.",
    "Best content on YouTube 💯",
    "Thank you bhaiya 🙏"
];

export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)]
};

export function generateRandomComment() {
    return commentTexts[Math.floor(Math.random() * commentTexts.length)];
}



export const findPrime = num => {

    let i, primes = [2, 3], n = 5;
    const isPrime = n => {

        let i = 1, p = primes[i],
            limit = Math.ceil(Math.sqrt(n));
        while (p <= limit) {

            if (n % p == 0) {
                return false;
            }
            i += 1;
            p = primes[i];
        }
        return true;
    }
    for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
        n += 2;
    }
    primes.push(n);
    n += 2;
}
return primes[num - 1];
}