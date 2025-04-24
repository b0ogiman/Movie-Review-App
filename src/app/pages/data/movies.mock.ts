import { Movie } from '../models/movie.model';

export const moviesData: Movie[] = [
    {
        id: 1,
        title: 'John-Wick',
        year: 2014,
        country: 'USA,China',
        genre: 'action',
        rating: 7.0,
        poster: 'assets/images/john-wick.jpg',
        description: 
        `John Wick is, at first glance, the most ordinary average American who leads a quiet, peaceful life.
         However, few people know that he was an assassin, and one of the best professionals in his field.
         After the son of the head of a bandit group and his friends hijack his beloved 1969 Mustang, killing his dog Daisy, 
         who was a gift from his recently deceased wife, John is forced to return to his past. 
         Now Wick is on the hunt for those who were careless enough to cross his path, and he's ready to do anything to get revenge.
        `.trim()
    },
    {
        id: 2,
        title: 'Mean Girls',
        year: 2004,
        country: 'USA,Canada',
        genre: 'comedy',
        rating: 7.0,
        poster: 'assets/images/mean-girls.jpg',
        description:
        `Having spent her childhood in Africa with her zoologist parents, Kady Heron thought she knew everything 
         about the "survival of the fittest" rule. But the law of the jungle is completely redefined when a homely 15-year-old girl
         enters a regular school for the first time and falls in love with the ex-boyfriend of the most popular girl in school.`.trim()
    },
    {
        id: 3,
        title: 'Avengers: Infinity War',
        year: 2019,
        country: 'USA',
        genre: 'action',
        rating: 9.0,
        poster: 'assets/images/avengers-infinity.jpg',
        description:
        `The surviving members of the Avengers team and their allies must develop a new plan that will help them
         resist the destructive actions of the powerful titan Thanos. After the biggest and most tragic battle in history, 
         they can't make a mistake.`.trim()
    },
    {
        id: 4,
        title: 'The Equalizer',
        year: 2012,
        country: 'USA',
        genre: 'action',
        rating: 7.3,
        poster: 'assets/images/the-equalizer.jpg',
        description:
        `Robert McCall, an elderly African-American former CIA agent, decided to start life anew, leave the difficult past and look to the future, 
        as promised to his late wife. He has already found a regular job as a store clerk. One day, McCall stands up for a young prostitute, Teri, 
        with whom he was chatting at a local diner and who is under the control of the Russian mafia. McCall ends his voluntary retirement and begins
        an independent quest for justice. Everyone who suffers from criminal bosses, corrupt officials and cannot find help from the state,
        finds help in the person of McCall. He will help. Because he is a great equalizer.`.trim()
    },
    {
        id: 5,
        title: 'Mission: Impossible',
        year: 1996,
        country: 'USA',
        genre: 'action',
        rating: 7.5,
        poster: 'assets/images/mission-impossible.jpg',
        description: 
        `CIA agent Ethan Hunt found himself in the position of a suspected mole who killed several members of his team, 
        including team leader Jim Phelps. The only survivor was Hunt's colleague, Phelps' wife, Agent Claire. To clear himself of 
        the accusations of betrayal, Hunt needs to find a real "mole".`.trim()
    },
    {
        id: 6,
        title: 'Home Alone',
        year: 1990,
        country: 'USA',
        genre: 'comedy',
        rating: 8.3,
        poster: 'assets/images/home-alone.jpg',
        description: 
        `An American family leaves Chicago for Europe, but in the rush of packing, stupid parents forget at home... 
        one of his children. The young creature, however, does not get lost and demonstrates the wonders of ingenuity. 
        And when burglars break into the house, they have to regret meeting a cute baby more than once.`.trim()
    },
    {
        id: 7,
        title: 'Cruella',
        year: 2021,
        country: 'USA,Canada,Great Britian, Ireland',
        genre: 'comedy',
        rating: 7.6,
        poster: 'assets/images/cruella.jpg',
        description: 
        `Great Britain, the 1960s. Estelle was an unusual child, and it was especially difficult for her to put up 
        with all kinds of injustice. After dropping out of another school, she and her mother go to London. On the way, 
        they stop at the mansion of a famous fashion designer named Baroness, where her mother dies in a terrible accident. 
        Upon reaching London, Estella meets two boys, Jasper and Horace, street crooks.`.trim()
    },
    {
        id: 8,
        title: 'Mask',
        year: 1994,
        country: 'USA',
        genre: 'comedy',
        rating: 8.0,
        poster: 'assets/images/mask.jpg',
        description: 
        `A modest and shy bank employee feels insecure around beautiful girls and people in general. 
        By the will of fate, a magic mask gets to him, and Stanley Ipkis acquires the ability to transform 
        into an invulnerable cartoon creature with a mischievous character.`.trim()
    },
    {
        id: 9,
        title: '1+1',
        year: 2011,
        country: 'France',
        genre: 'drama',
        rating: 8.9,
        poster: 'assets/images/omar-si.jpg',
        description: 
        `The paralyzed rich aristocrat Philip, who became disabled after an unsuccessful paragliding flight, 
        is looking for an assistant who will take care of him. They become unemployed black Driss, who just wanted
         to get a written refusal so that he could receive unemployment benefits later. However, Driss and Philippe soon 
         become best friends, and their lives change for the better.`.trim()
    },
    {
        id: 10,
        title: 'Green Mile',
        year: 1999,
        country: 'USA',
        genre: 'drama',
        rating: 9.1,
        poster: 'assets/images/green-mile.jpg',
        description: 
        `Paul Edgecombe is the head of the death row unit at the Cold Mountain prison, each of whose prisoners once passes the "green mile" 
        on their way to the place of execution. Paul had seen a lot of prisoners and guards during his work. However, the giant John Coffey, 
        accused of a terrible crime, became one of the most unusual inhabitants of the block.`.trim()
    },
    {
        id: 11,
        title: 'Hachico: A Dogs tale',
        year: 2008,
        country: 'USA,Great Britian',
        genre: 'drama',
        rating: 8.4,
        poster: 'assets/images/hachico.jpg',
        description:
        `One day, returning from work, a college professor found a cute Akita Inu puppy at the train station. 
        The professor and Hachiko became loyal friends. Every day, the dog saw off and met the owner at the train station.`.trim()
    },
    {
        id: 12,
        title: 'The lake house',
        year: 2006,
        country: 'USA,South Korea',
        genre: 'drama',
        rating: 7.8,
        poster: 'assets/images/the-lake-house.jpg',
        description: 
        `Kate Forster, after breaking up with her boyfriend, decides to move in order to start over with a clean slate, 
        and at the same time be closer to work. She leaves a letter in the mailbox for the next tenant, explaining some of the
         nuances. The new tenant turns out to be Alex Wyler, a lonely architect whose father built this beautiful house. He reads the message, 
         but cannot understand why Kate's description does not match reality. This prompts Alex to write a reply. After a few days of correspondence, 
         the characters realize that they live in different times: he in 2004, she in 2006. And only the mysterious
          mailbox serves as a connecting bridge for them.`.trim()
    },
    {
        id: 13,
        title: 'Interstaller',
        year: 2014,
        country: 'USA,Great Britian,Canada',
        genre: 'sci-fi',
        rating: 8.7,
        poster: 'assets/images/interstaller.jpg',
        description:
        `When drought, dust storms, and plant extinction lead humanity to a food crisis, a team of researchers
         and scientists sets out through a wormhole (which supposedly connects regions of space-time across a large distance)
          on a journey to surpass previous limitations for human space travel and find a planet with suitable conditions for humanity.`.trim()
    },
    {
        id: 14,
        title: 'The Matrix',
        year: 1999,
        country: 'USA,Australia',
        genre: 'sci-fi',
        rating: 8.5,
        poster: 'assets/images/matrix.jpg',
        description:
        `Thomas Anderson's life is divided into two parts: during the day he is just an ordinary office worker who gets scolded by his superiors,
         and at night he turns into a hacker named Neo, and there is no place on the network where he would not be able to penetrate. But one day everything changes. 
         Thomas learns the horrifying truth about reality.`.trim()
    },
    {
        id: 15,
        title: 'Blade Runner',
        year: 1982,
        country: 'USA,Great Britian',
        genre: 'sci-fi',
        rating: 7.7,
        poster: 'assets/images/blade-runner.jpg',
        description:
        `November 2019. Former android hunter Rick Deckard has been reinstated in the Los Angeles Police Department 
        to search for a group of replicants led by Roy Batty who escaped from a space colony to Earth. The police believe that
         the androids are trying to meet with Endol Tyrell, the head of a corporation that develops cybernetic intelligence. 
         Deckard is tasked with finding out the replicants' motives and destroying them.`.trim()
    },
    {
        id: 16,
        title: 'The Terminator',
        year: 1984,
        country: 'USA,Great Britian',
        genre: 'sci-fi',
        rating: 8.0,
        poster: 'assets/images/terminator.jpg',
        description:
        `The story of the confrontation between soldier Kyle Reese and the cyborg terminator, who arrived in 1984
         from a post-apocalyptic future where the world is ruled by killer machines, and humanity is on the verge of extinction.`.trim()
    },
    {
        id: 17,
        title: 'Shutter Island',
        year: 2009,
        country: 'USA',
        genre: 'thriller',
        rating: 8.5,
        poster: 'assets/images/shutter-island.jpg',
        description:
        `Two American bailiffs are sent to an island in Massachusetts to investigate the disappearance of a patient
         at a clinic for the criminally insane. During the investigation, they will have to face a web of lies, a hurricane, 
         and a deadly riot by the clinic's inhabitants.`.trim()
    },
    {
        id: 18,
        title: 'Fight Club',
        year: 1999,
        country: 'USA,Germany',
        genre: 'thriller',
        rating: 8.7,
        poster: 'assets/images/fight-club.jpg',
        description: 
        `An insurance company employee suffers from chronic insomnia and is desperately trying to escape from
         an excruciatingly boring life. One day, on another business trip, he meets a certain Tyler Durden, a charismatic soap 
         merchant with a twisted philosophy. Tyler is sure that self—improvement is the lot of the weak, and the only thing worth 
         living for is self—destruction. 
         
         It doesn't take long, and now new friends are hitting each other for nothing in the parking lot in front of the bar,
         and the cleansing fight brings them supreme bliss. By introducing other men to the simple joys of physical cruelty,
         they found a secret Fight club, which is beginning to enjoy incredible popularity.`.trim()
    },
    {
        id: 19,
        title: 'Invisible guest',
        year: 2016,
        country: 'Spain',
        genre: 'thriller',
        rating: 7.9,
        poster: 'assets/images/invisible-guest.jpg',
        description:
        `A young businessman, Adrian Doria, is accused of murdering his mistress, and he decides 
        to use the services of Virginia Goodman, the country's best specialist in getting out of the most
         difficult situations. Adrian is being held under house arrest, and tomorrow there will be a court hearing,
          so Virginia comes to him in the evening to come up with the best defense strategy. This is her last case, 
          and she's not going to lose it.`.trim()
    },
    {
        id: 20,
        title: 'Limitless',
        year: 2011,
        country: 'USA',
        genre: 'thriller',
        rating: 8.0,
        poster: 'assets/images/limit.jpg',
        description:
        `New York writer Eddie, wanting to overcome a dark streak in life, takes a classified drug called NZT. 
         The pill puts the guy's brain to work at an unreal capacity. This creative drug changes Eddie's whole life,
         he earns a lot of money in a short time, but soon begins to suffer from the sinister side effects of the drug. 
         And when he tries to find other NZT geniuses to figure out how to deal with this addiction,
         he learns the terrible truth.…`.trim()
    }
]