import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import bean from '@/assets/bean.webp';
import boss from '@/assets/boss.webp';
import normal from '@/assets/normal.webp';



const englishText = `JALJIV RAKSHAK FOUNDATION (Regd.), MUMBAI is an NGO comprising of swimmers/lifeguards/volunteers, etc. who have been co-ordinating with Traffic Control Branch (R.T.O.) MUMBAI for more than 25 years and in active co-ordination with Mumbai Police and Brihan Mumbai Mahanagar Palika (BMC) is providing Lifeguards for Ganesh immersion, Devi visarjan, Mahamanav Bharat Ratna Dr Babasaheb Ambedkar Mahaparinirvan din – 6th December, 31st December, New year celebrations, Haji Ali Darga Badi Raat, Ramzan Eid, etc. and for other Emergency Services. We provide "FREE OF COST" services on above occasions at various beaches of Mumbai. With an army of more than 400 volunteers (Lifeguards) stationed on shores putting in dedication of selfless service & hard work by standing in waters for 12–16 hours, are responsible for safety and security of general public and drowning incidences in particular.`;

const coreCommittee = [
  { name: 'Sanjaykumar Gyanprakash Mishra', role: 'Chairman', roleMr: 'अध्यक्ष', photo: normal },
  { name: 'Rajkumar Srichand Bhatia', role: 'CEO / Treasurer', roleMr: 'CEO / खजिनदार', photo: bean },
  { name: 'Sandeep Balkrishna Shivtarkar', role: 'General Secretary', roleMr: 'सचिव', photo: boss },
];

const generalBodyMembers = [
  "Sushant Sunil Kavalekar (PRO – South zone)",
  "Anand Keshav Raimane (PRO – East zone)",
  "Rafik Babu Mulani (PRO – Western zone)",
  "Devendra Yadav (PRO – Western zone)",
  "Vijay Babu Mithapara (Instructor)",
  "Darshan Balasaheb Dhokare (Instructor)",
  "Umashankar Samarnath Sharma",
  "Bhushan Harendra Pandhare",
  "Rohan Vinodkumar Devlekar",
  "Ajay Gopal Ajgoankar"
];

const vipMembers = [
  "Shri Prakash Prabhakar Bhat (Committee Member : GSB Sarvajanik, Ganeshotsava Samiti, Wadala, Mumbai)",
  "Shri Jitendra Vishnu Kamble (Chairman : Dharmaratna Samajik Sanstha)",
  "Shri Rajendra Ramchandra Lokhande (Shift Incharge : Disaster Management Department, MCGM )",
  "Shri Sandeep Balkrishna Shivtarkar ( Chairman : Incredible Martial Arts Academy)",
  "Shri Sanjaykumar Gyanpraksh Mishra ( National President : Anyay Virodhak Seva Samiti )"
];

const activeMembersWomen = [
  "Anu Ashok Ramaiiya (Juhu)",
  "Beby Ganesh Swami (Juhu)",
  "Bhakti Mahendra Pawar",
  "Bhavika Mandar Katkar",
  "Darshana Ravi Patel (Juhu)",
  "Dhruvi Jitu Solanki",
  "Kartika Shashikant Jadhav",
  "Lalita Ramchandra Bhriste (Juhu)",
  "Manisha Vijay Lokhande (Juhu)",
  "Meena Vishnu Nadar (Juhu)",
  "Megha Naresh Kharwa (Juhu)",
  "Rupa Ravi Patel (Juhu)",
  "Sunita Ganesh Gade (Juhu)",
  "Usha Anil Rathod (Juhu)"
];

const activeMembersMen = [
  "Aakash Ashok Khakhrodiya",
  "Aatish Shantaram Patil",
  "Abhay Arun Kadam",
  "Abhay Ganpat Rawool",
  "Abhay Yashwant Kadam",
  "Abhijeet Tukaram Gawasthe",
  "Abhishek Subhash Sawant",
  "Abhishekh Anil Bhartiya",
  "Abhishekkumar Ramsamuj Upadhay",
  "Adarsh Indresh Dubey",
  "Aditya Gajanan Raut",
  "Aditya Girishankar Kori",
  "Aditya Maruti Mirjurkar",
  "Aditya Mohan Varadkar",
  "Aditya Suresh Joshi",
  "Ajay Appa Rao",
  "Ajay Badelal Passi",
  "Ajay Dilip Khakrodiya",
  "Ajay Krishna Gharuk",
  "Ajay Narayan Solanki",
  "Ajay Ramesh Parmar",
  "Ajay Sampt Kamble",
  "Ajay Suresh Rana",
  "Ajinkya Gautam Misle",
  "Akash Anil Singh",
  "Akash Chandrakant Dichavalkar",
  "Akash Jagtap",
  "Akash Krishna Gupta",
  "Akash Mahesh Shukla",
  "Akash Sawant",
  "Akash Sudesh Gaikwad",
  "Akashkumar Rajendra Mandal",
  "Akhil Naraya Gadala",
  "Akshay Atmaram Shingade",
  "Akshay Manohar Paste",
  "Akshay Pramod Chavan",
  "Akshay Sanjay Kanade",
  "Akshay Sham Diwalkar",
  "Akshay Vijay Mahangde",
  "Alok Kumar Gond",
  "Amar Arun Kadam",
  "Amar Satappa Chavrekar",
  "Amey Anand Gawade",
  "Amit Anant Temkar",
  "Amit Ashok Kadam",
  "Amit Bapu Shelar",
  "Amit Ramchandra Sutar",
  "Amol Arun Dali",
  "Amol Raghunath Mestry",
  "Amrut Chhagan Rathod",
  "Amrut Narayan Parmar",
  "Aniket Yashwant Kadam",
  "Anil Raju Butiya",
  "Anil Ramesh Jadhav",
  "Anil Ranji Solanki",
  "Anil Sadanand Kajrolkar",
  "Anil Subhash Shirke",
  "AnilKumar Rajaram Guddeti",
  "Aniruddha Anil Kajrolkar",
  "Ankit Raju Mohite",
  "Anup Rahul Kadam",
  "Arjun Bhuwad",
  "Arun Baban Kadam",
  "Arun Dhondiram Mane",
  "Arun Harinarayan Nag",
  "Aryan Pradeep Waikar",
  "Ashish Gautam Surana",
  "Ashish Rangnath Chavan",
  "Ashok Shantaram Mundak",
  "Ashutosh Surendra Bhujbal",
  "Ashwin Chunnilal Jain",
  "Ashwin Harishchandra Rane",
  "Ashwini Kumar Singh",
  "Aurangzeb Mohd. Moez Malik",
  "Balchandra Ganpat Patil",
  "Balchandra Krishna Indulkar",
  "Bharat Vasant Solanki",
  "Bhaskar Narayan Bangera",
  "Chakrapani Kudikala",
  "Chetan Jetwa",
  "Chetan Vasudeo Koli",
  "Darshan Dharmendra Mishra",
  "Darshan Pravin Jain",
  "Darshan Rajesh Shinde",
  "Dashrath Laxman Gupta",
  "Dashrath Sudhakar Dongre",
  "Deepak Dhondiba Karade",
  "Deepak Rajendra Raut",
  "Devdas Ananda Kamble",
  "Dhananjay Laxman Mhatre",
  "Dhiraj Limba Chavda",
  "Dhiraj Trikam Solanki",
  "Dinesh Deepak Shinde",
  "Dinesh Manilal Solanki",
  "Dnyanesh Ramesh Zujam",
  "Durgesh Satyanarayan Soni",
  "Ganesh Arjun Nakade",
  "Ganesh Dilip Jadhav",
  "Ganpat Yashwant Kundiya",
  "Gaurav Krushna Bhagade",
  "Gevarchand Saremal Jain",
  "Girish Devdutt Shirke",
  "Girish Laxman Tandel",
  "Gorakhnath Navnath Jagtap",
  "Gunga Maruti Kumbhar",
  "Hanumant Mugatrao Chavan",
  "Hardik Deepak Punchal",
  "Harish Kishan Ugrejia",
  "Harshad Maruti Dhumal",
  "Harshal Chalu Chimane",
  "Hasnain Anwar Shaikh",
  "Hemant Jaywant Deve",
  "Hemant Namdev Dharanarkar",
  "Himanshu Ganesh Odankar",
  "Hitesh Babubhai Pengater",
  "Hitesh Ravindra Draveshi",
  "Iliyas Mehboob Beg",
  "Jagdish Harishchandra Gaukar",
  "Jayendra Kanji Gohil",
  "Jayesh Deepak Bhadarka",
  "Jitendra Sitaram Mukhiya",
  "Jitesh Bachu Bochiya",
  "Kaleshwar Sadashiv Shinde",
  "Kalpesh Anil Jadhav",
  "Kashinath Dhaku Lad",
  "Khushal Girish Shah",
  "Khushalchand Shantilal Gujjar",
  "Kiran Raghunath Wakode",
  "Kirti Ashiwin Patadia",
  "Kishan Dilip Khakhrodiya",
  "Koushik Gopinath Gajakosh",
  "Krishna Hari Pasi",
  "Krishna Mangesh Ragji",
  "Krunal Vivek Bandodkar",
  "Krutik Dilip Pawar",
  "Kusahl Parshuram Koli",
  "Laxman Bhikhabai Tank",
  "Laxman Khandu Mhatre",
  "Maan Joshi",
  "Madhukar Krishna Chavan",
  "Mahadev Vishnu Koke",
  "Mahendra Baburao Bagve",
  "Mahesh Anantrao Mane",
  "Mahesh Kamlakar Patil",
  "Mahesh Manohar Maniar",
  "Mahesh Namdev Borade",
  "Mahesh Ramdas Gupta",
  "Maitreya Mandar Katkar",
  "Mandar Dyanoba Katkar",
  "Manav Mukesh Gohil",
  "Manesh Kapoorchand Nanavali",
  "Mangal Dilip Kkakhrodiya",
  "Mangesh Dattaram Teli",
  "Mangesh Rajaram Iswalkar",
  "Mangesh Rama Goregaonkar",
  "Manish Govind Manchekar",
  "Manoj Baburao Khaire",
  "Manoj Udaybhan Kanojia",
  "Manojkumar Santlal Jaiswar",
  "Maruti Shamrao Nikade",
  "Mayuresh Bhalchandra Patil",
  "Milind Raghunath Ambre",
  "Mohanlal Bhawarlal Jain",
  "Mojesh Samadhan Arella",
  "Murugesh Madaswamy",
  "Mustak Ramzan Khan",
  "Nandish Bhagwan Choudhary",
  "Narayan Narsayya Katkam",
  "Nayan Ramesh Patil",
  "Nayan Shantaram Tarkar",
  "Nihal Manoj Sonawane",
  "Nikhil Fulchand Jaiswal",
  "Nikhil Sudam Chavan",
  "Nilesh Dyandev Agavne",
  "Nilesh Narayan Katkam",
  "Nimesh Pravin Patel",
  "Niraj Nitin Gala",
  "Nitin Chandrakant Sawant",
  "Nitin Dinanath Chouhan",
  "Nitin Mulji Gala",
  "Nitin Shridhar Jathar",
  "Nitish Vidhyadhar Kasekar",
  "Niyaz Abdul Karim Shaikh",
  "Omkar Harishandra Shriskar",
  "Omkar Mahesh Kadam",
  "Omkar Nagesh Bhusane",
  "Parth Harishchandra Bhavkar",
  "Parth Mahesh Koli",
  "Pascoal Baylon Kinny",
  "Pradeep Krishna Koli",
  "Pradeep Shridhar Pawaskar",
  "Praful Balkrishna More",
  "Praful Milind Gadhire",
  "Prakash Nagareddy Pala",
  "Prakash Navratan Fulwadiya",
  "Prakash Suresh Ugrejia",
  "Pranay Ashok Advilkar",
  "Pranil Vasant Kotkar",
  "Prasad Atmaram Mogre",
  "Prasad Chintaman Jadhav",
  "Prashant Jaiprakash Kadam",
  "Prashant Jairam Tawade",
  "Pratham Deepak Rathod",
  "Prathamesh Chandrakant Chavan",
  "Pratik Prakash Jadhav",
  "Pratik Radhesham Gupta",
  "Pratyum Sakharam Trimukhe",
  "Praveen Bhagogi Jadhav",
  "Pritam Dilip Gupta",
  "Prithvi Himmat Jadheja",
  "Rahul Arjun Kengar",
  "Rahul Dharma Natekar",
  "Rahul Jivan Khakhrodiya",
  "Rahul Purshottam Makwana",
  "Rahul Ramesh Patil",
  "Rahul Santosh Bhole",
  "Rahul Uttam Kadam",
  "Raj Pyarelal Prajapati",
  "Rajaram Kisan Mane",
  "Rajesh Balkrishna Sawant",
  "Rajesh Narayan Sawant",
  "Rajeshwar Nagnath Narawad",
  "Rakesh Haridas Kamble",
  "Rakesh Ramesh Soday",
  "Rakesh Suresh Mhatre",
  "Ram Arun Kadam",
  "Ramchandra Somaiya Pagdal",
  "Ramesh Rajaram Ghorpade",
  "Rasik Gajanan Patil",
  "Ravi Murthy Mytri",
  "Ravindra Ramesh Manjrekar",
  "Ravindra Shankar Kangane",
  "Rekansh Devendra Worlikar",
  "Riyaz Zuber Ahmad Jardi",
  "Rohan Ganesh Shendge",
  "Rohan Raju Mohite",
  "Rohan Satnam Dulgaj",
  "Rohit Bapu Jadhav",
  "Rohit Gajanan Parsekar",
  "Rohit Ramesh Kadam",
  "Rohit Ramchandra Shinde",
  "Rohit Ravindra Wadkar",
  "Roshan Pramod Worlikar",
  "Rupesh Dominic Koli",
  "Rupesh Ravindra Kathore",
  "Rupesh Vasant Dherange",
  "Rushikesh Prabhakar Bhole",
  "Sachin Rama Patil",
  "Sachin Suresh Patil",
  "Sagar Baliram Pawar",
  "Sagar Chandrakant Sahil",
  "Sagar Jayanti Kanjila",
  "Sagar Nandkumar Timane",
  "Sagar Narayan Narangikar",
  "Sagar Ramchandra Javir",
  "Sagar Vilas Bansode",
  "Sahil Pravin Surve",
  "Sahil Sanjay Dohiphode",
  "Salil Sunil Gupte",
  "Sameer Pradeep Tandel",
  "Sameer Ramchandra Todankar",
  "Sameer Tanaji Nikam",
  "Sandeep Shankar Suryawanshi",
  "Sandeep Sunil Kundia",
  "Sanjay Balkrishna Badabe",
  "Sanjay Yashwantrao Desai",
  "Sanket Anil Ghanekar",
  "Sanket Dattaram Patil",
  "Sanket Prakash Magar",
  "Sanket Suryakant Ramane",
  "Santosh Babu Mithapraha",
  "Santosh Bhagwat More",
  "Santosh Kumar Mandal",
  "Santosh Pandurang Berde",
  "Santosh Pralhad Tupe",
  "Santosh Raju Waghela",
  "Santosh Ramrav Gavle",
  "Santosh Sadashiv Shringare",
  "Santosh Shantaram Shinde",
  "Santosh Suresh Walawalkar",
  "Santosh Vinod Kharvi",
  "Satish Sahadev Mhatre",
  "Satyendra Chattu Tiwari",
  "Saurabh Rakesh Maurya",
  "Saurav Vinod Bharti",
  "Shahid Abdul Gani Charfarray",
  "Shailendra Suryakant Koli",
  "Shailesh Sadanand Poojari",
  "Shailesh Sangram Yadhav",
  "Shailesh Tanaji Sangle",
  "Shankar Dattatray Patil",
  "Sharad Arun Kadam",
  "Shashank Nagesh Bhatade",
  "Shashikant Shankar Mohite",
  "Shashikumar Mohanrao Eada",
  "Shekhar Rajaram Iswalkar",
  "Shirish Mahadev Mohite",
  "Shivam Rajesh Tripathi",
  "Shivram Chandrakant Parab",
  "Shreyas Ganesh Shirgaonkar",
  "Shrikant Laxman Odel",
  "Shrikant Rajaram Iswalkar",
  "Shrikant Shivaji Ghorpade",
  "Shubham Nandkumar Timane",
  "Shubham Rakesh Dubey",
  "Siddesh Narendra Gangan",
  "Siddesh Satyanarayan Kengar",
  "Siddhesh Mangesh Zujam",
  "Somnath Prabhakar Bankar",
  "Subhodh Laxman Kadam",
  "Sudam Keshav Chavan",
  "Sudesh Gawde",
  "Sudhir Gopal Sadadekar",
  "Sudip Ramdas Indurkar",
  "Sumit Shyam Pawar",
  "Sundaram Umesh Mishra",
  "Sunil Gopal Raccha",
  "Sunil Nivrutti Jagtap",
  "Sunil Yashwant Kundia",
  "Sunny Suleman Shirolkar",
  "Suraj Rajesh Maurya",
  "Surendra Parshuram Jadhav",
  "Surendra V. Jagatkar",
  "Suryakant Machindra Shinde",
  "Suryakant Namdev Khaire",
  "Suryaprakash Hanumanprasad Mishra",
  "Sushant Vasant Kotawadekar",
  "Suyog Mahendra Bhilare",
  "Swapnil Nivrutti Jagtap",
  "Swapnil Ramesh Zujam",
  "Tanaji Krishna Chavan",
  "Tanaji Shankar Zore",
  "Tanish Bharat Kamble",
  "Tanmay Sanjay Bakkar",
  "Tanveer Shyam Shinde",
  "Tejas Kishor Bolaye",
  "Tushar Liladhar Panjri",
  "Uday Sadashiv Sawant",
  "Vaibhav Deepak Punchal",
  "Vaibhav Devean Nagare",
  "Vaibhav Rajan Naik",
  "Varunkumar Harinarayan Nag",
  "Vighnesh Vivek Bagwe",
  "Vijay Gopal Khakhrodiya",
  "Vijay Gopitanath Pirankar",
  "Vijay Raju Waghela",
  "Vijay Shamrao Chavan",
  "Vikas Soni Rameshwar",
  "Vikram Punamchand Shah",
  "Vikram Shantaram Mohit",
  "Vilas Shivdas Pawar",
  "Vinay Namdev Kadam",
  "Vinay Raju Vaishya",
  "Vinayak Baji Kalvankar",
  "Vinayak Dattaram Sherla",
  "Vinayak Devdas Gaikwad",
  "Vinayak Krishan Bane",
  "Vinayak Laxman Angchekar",
  "Vinayak Rajaram Iswalkar",
  "Vinayak Shashikant Mistry",
  "Vinit Krishna Koli",
  "Vinod Babu Mithapraha",
  "Vinod Parshuram Shinde",
  "Vinod Sitaram Bharti",
  "Vishal Narayan Chekaliya",
  "Vishal Sadanand Pingle",
  "Vishal Suresh Pande",
  "Vishnu Mahadev Gawde",
  "Vishwajit Satish Chavan",
  "Vishwas Dnyaneshwar Jagdale",
  "Vishwas Shantaram Avinave",
  "Vivek Shashikant Patil",
  "Waman Vishnu Kamble",
  "Yadnesh Dnyaneshwar Gorad",
  "Yash Bhanwarlal Choudhary",
  "Yash Kiran Shinde",
  "Yogesh Amritlal Chawda",
  "Yogesh Kishor Naik",
  "Yogesh Krushali Salaskar",
  "Yogesh Parmar"
];
// Reusable Collapsible Component
const CollapsibleSection = ({ title, members, styleVariant = 'default' }: { title: string, members: string[], styleVariant?: 'default' | 'vip' | 'women' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define grid classes based on list length to optimize layout
  const gridClass = members.length > 20 
    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  // Style variants
  const cardStyle = styleVariant === 'vip' 
    ? "bg-gold/5 border-gold/20 text-foreground"
    : styleVariant === 'women'
      ? "bg-pink-50 dark:bg-pink-900/20 text-foreground"
      : "bg-secondary/5 border-border/50 text-foreground";

  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors border border-border rounded-xl shadow-sm group"
      >
        <h3 className="font-heading font-bold text-lg md:text-xl text-primary text-left uppercase tracking-wider group-hover:text-gold transition-colors">
          {title}
        </h3>
        <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary/10 rotate-180' : 'bg-transparent'}`}>
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`grid ${gridClass} gap-3 p-4 pt-6 border-x border-b border-border/50 rounded-b-xl mx-2`}>
              {members.map((member, index) => (
                <div key={index} className={`${cardStyle} p-3 rounded-lg text-center text-sm font-medium border transition-all hover:shadow-sm`}>
                  {member}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function About() {
  const { t } = useLanguage();

  return (
    <PageLayout headerImage="/cyan.jpg">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 text-center">
              {t('About Our Foundation', 'आमच्या फाउंडेशनबद्दल')}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full mb-12 mx-auto" />
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p className="leading-relaxed whitespace-pre-line text-justify">{englishText}</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-card h-full min-h-[400px]">
                <img
                  src="/info.jpg"
                  alt={t('About Us', 'आमच्याबद्दल')}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="font-heading font-bold text-2xl text-foreground mb-8 text-center">
              {t('Core Committee Members', 'केंद्रीय समिती सदस्य')}
            </h2>
            <div className="grid gap-6 md:grid-cols-3 mb-20">
              {coreCommittee.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-30 h-30 bg-secondary/10 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-10 h-10 text-primary" />
                    )}
                  </div>
                  <p className="font-heading font-semibold text-lg text-foreground">{member.name}</p>
                  <p className="text-sm text-gold font-medium mt-1 uppercase tracking-wide">{t(member.role, member.roleMr)}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl text-foreground text-center mb-12 border-b border-border pb-4">
                {t('Other Members', 'इतर सदस्य')}
              </h2>

              <CollapsibleSection 
                title={t('General Body / Managing Committee Members', 'सर्वसाधारण सभा / व्यवस्थापन समिती सदस्य')} 
                members={generalBodyMembers} 
              />
              
              <CollapsibleSection 
                title={t('VIP Members', 'VIP सदस्य')} 
                members={vipMembers} 
                styleVariant="vip" 
              />
              
              <CollapsibleSection 
                title={t('Active Members (Men)', 'सक्रिय सदस्य (पुरुष)')} 
                members={activeMembersMen} 
              />
              
              <CollapsibleSection 
                title={t('Active Members (Women)', 'सक्रिय सदस्य (महिला)')} 
                members={activeMembersWomen} 
                styleVariant="women" 
              />
            </div>

            <div className="mt-16 text-center">
              <Button asChild className="rounded-full font-heading px-8">
                <Link to="/">{t('Back to Home', 'मुख्यपृष्ठावर परत')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}