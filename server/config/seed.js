/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import Quote from '../api/quote/quote.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

  Quote.find({}).removeAsync()
    .then(() => {
      Quote.create({
        text: 'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear',
        background_img: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=1500&fit=max',
        background_color: '#446331',
        author_name: 'Nelson Mandela',
        author_photo: 'https://pbs.twimg.com/profile_images/643498811118219264/VRQ00g5u.jpg'
      }, {
        text: 'You cannot escape the responsibility of tomorrow by evading it today',
        author_name: 'Abraham Lincoln',
        background_color: '#62ACDF',
        background_img: 'https://images.unsplash.com/photo-1468711007652-03aab17ae4d2?w=1500&fit=max',
        author_photo: 'https://pbs.twimg.com/profile_images/649320022586691584/VxKYEkEG.jpg'
      }, {
        text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment',
        author_name: 'Buddha',
        background_color: '#E9BD7B',
        background_img: 'https://images.unsplash.com/photo-1468608882757-73eb99740607?w=1500&fit=max',
        author_photo: 'https://static-s.aa-cdn.net/img/ios/912702199/d14e1a4a7e8784859bce0883eb3d0966'
      }, {
        text: 'The future belongs to those who prepare for it today.',
        author_name: 'Malcolm X',
        background_color: '#846560',
        background_img: 'https://images.unsplash.com/photo-1468598052915-dd7b597b5a75?w=1500&fit=max',
        author_photo: 'https://pbs.twimg.com/profile_images/669655478146740224/IXUkXfxo.png'
      }, {
        text: "Intelligence is the ability to adapt to change",
        author_name: "Stephen Hawking",
        background_color: '#355355',
        background_img: "https://images.unsplash.com/photo-1468532988488-ffa1203ee384?w=1500&fit=max",
        author_photo: "https://pbs.twimg.com/profile_images/589926106221936640/YjN9bPrP.jpg"
      }, {
        text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking",
        author_name: "Marcus Aurelius",
        background_color: '#46513D',
        background_img: "https://images.unsplash.com/photo-1465021696408-57e53e164d0e?w=1500&fit=max",
        author_photo: "https://pbs.twimg.com/profile_images/626426959329767424/YWRQBSN2.jpg"
      }, {
        text: "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected",
        author_name: "Steve Jobs",
        background_color: '#ABAFBB',
        background_img: "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?w=1500&fit=max",
        author_photo: "https://pbs.twimg.com/profile_images/587100329986158592/BKaRJuri.jpg"
      }, {
        text: "My mama always used to tell me: 'If you can't find somethin' to live for, you best find somethin' to die for",
        author_name: "Tupac Shakur",
        background_color: '#939597',
        background_img: "https://images.unsplash.com/photo-1448535544744-01b09435c00f?w=1500&fit=max",
        author_photo: "https://pbs.twimg.com/profile_images/666283206274998272/L_M8ndSj.jpg"
      }, {
        text: "If I have seen further than others, it is by standing upon the shoulders of giants",
        author_name: "Isaac Newton",
        background_color: '#545853',
        background_img: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?w=1500&fit=max",
        author_photo: "https://pbs.twimg.com/profile_images/659762372639199233/rdS2EJ-5.jpg"
      }, {
        text: "A man who dares to waste one hour of time has not discovered the value of life",
        author_name: "Charles Darwin",
        background_color: '#787673',
        background_img: "https://images.unsplash.com/photo-1466276534225-c8d52b266271?w=1500&fit=max",
        author_photo: "https://pbs.twimg.com/profile_images/3781500000856487986/VG25wfXC.jpeg"
      });
    });
