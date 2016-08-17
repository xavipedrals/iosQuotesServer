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
        background_img: 'http://images.wisegeek.com/sky.jpg',
        background_color: 'f45656',
        author_name: 'Nelson Mandela',
        author_photo: 'https://pbs.twimg.com/profile_images/643498811118219264/VRQ00g5u.jpg'
      }, {
        quote: 'You cannot escape the responsibility of tomorrow by evading it today',
        author: 'Abraham Lincoln',
        background: 'http://www.bioversityinternational.org/fileadmin/user_upload/about_us/news/Landscape/Landscape_Chile_Pablo_CM.jpg',
        authorBackground: 'https://pbs.twimg.com/profile_images/649320022586691584/VxKYEkEG.jpg'
      }, {
        quote: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment',
        author: 'Buddha',
        background: 'http://www.karmaquests.com/images/Burma%20Pagan%20landscape.jpg',
        authorBackground: 'https://static-s.aa-cdn.net/img/ios/912702199/d14e1a4a7e8784859bce0883eb3d0966'
      }, {
        quote: 'The future belongs to those who prepare for it today.',
        author: 'Malcolm X',
        background: 'http://www.wallpapersonview.com/wallpapers/4/landscape_amazing_nature_quality_lake_background_picture-107.jpg',
        authorBackground: 'https://pbs.twimg.com/profile_images/669655478146740224/IXUkXfxo.png'
      }, {
        quote: "Intelligence is the ability to adapt to change",
        author: "Stephen Hawking",
        background: "http://www.featurepics.com/FI/Thumb300/20090619/Beautiful-Forest-Landscape-Nature-Background-1220246.jpg",
        authorBackground: "https://pbs.twimg.com/profile_images/589926106221936640/YjN9bPrP.jpg"
      }, {
        quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking",
        author: "Marcus Aurelius",
        background: "http://www.ohdwallpapers.com/wp-content/uploads/2015/11/forest-landscape-desktop-backgrounds.jpg",
        authorBackground: "https://pbs.twimg.com/profile_images/626426959329767424/YWRQBSN2.jpg"
      }, {
        quote: "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected",
        author: "Steve Jobs",
        background: "http://s3.favim.com/orig/150211/background-beauty-cool-fav-Favim.com-2469443.jpg",
        authorBackground: "https://pbs.twimg.com/profile_images/587100329986158592/BKaRJuri.jpg"
      }, {
        quote: "My mama always used to tell me: 'If you can't find somethin' to live for, you best find somethin' to die for",
        author: "Tupac Shakur",
        background: "http://www.planwallpaper.com/static/images/nature_backgrounds_elegant_backgrounds_image_hq_7004.jpg",
        authorBackground: "https://pbs.twimg.com/profile_images/666283206274998272/L_M8ndSj.jpg"
      }, {
        quote: "If I have seen further than others, it is by standing upon the shoulders of giants",
        author: "Isaac Newton",
        background: "http://i00.i.aliimg.com/wsphoto/v0/2046736798/10x10FT-Backdrop-Autumn-Maple-Trees-Leaves-Park-Wedding-Portrait-Photography-Studio-Customize-Background-Vinyl-8x8-8x15.jpg",
        authorBackground: "https://pbs.twimg.com/profile_images/659762372639199233/rdS2EJ-5.jpg"
      }, {
        quote: "A man who dares to waste one hour of time has not discovered the value of life",
        author: "Charles Darwin",
        background: "http://4hdwallpapers.com/wp-content/uploads/2013/04/Rain-Background-1024x640.jpg",
        authorBackground: "https://pbs.twimg.com/profile_images/378800000856487986/VG25wfXC.jpeg"
      });
    });
