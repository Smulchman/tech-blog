const { Post } = require('../models');

const postData = [
  {
    id: '1',
    title: 'Gobbledygook',
    text: 'We need a more contemporary reimagining of our quality reciprocal programming. Our upgraded model now offers synchronised administrative alignment.At base level, this just comes down to systemised management matrix approaches. Forward-looking companies invest in ambient modular capability. The consultants recommend three-dimensional management projections. Today marks the 20th anniversary celebrations of our synchronised transitional mobility. I can make a window to discuss your responsive transitional processing. We need to cascade memos about our ambient third-generation projections. You really cant fail with total strategic consulting. My organisation believes in responsive relative time-phases.',
    user_id: '1'
  },
  {
    id: '2',
    title: 'Mumbo Jumbo',
    text: 'Astrologers claim that Grahas influence the auras (energy bodies) and minds of beings connected to the Earth. Each Graha carries a specific energy quality, which is described in an allegorical form through its scriptural and astrological references. The energies of the Grahas are getting connected in a specific way to the individual auras of humans at the time they take their first breath in a given nativity. These energy connections remain with the natives of Earth as long as their current body lives.[5] “The nine planets are transmitters of universal, archetypal energy. The qualities of each planet help to maintain the overall balance of polarities in both the macrocosmic and the microcosmic universe - as above, so below',
    user_id: '2'
  },
  {
    id: '3',
    title: 'Nonsense',
    text: "You've got to be kidding me. I've been further even more decided to use even go need to do look more as anyone can. Can you really be far even as decided half as much to use go wish for that? My guess is that when one really been far even as decided once to use even go want, it is then that he has really been far even as decided to use even go want to do look more like. It's just common sense.",
    user_id: '3'
  },
  {
    id: '4',
    title: 'Confusing',
    text: "It is also important that the external containers are kept to a high standard and that each stream can be identified easily. The most notable problem that occupiers and retailers have had recently is differentiating between the general waste and mixed recycling containers. As a result we have started to introduce side mesh mixed recycling containers. This allows retailers and office occupiers to easily identify the mixed recycling containers. It also helps highlight black bag contamination issues easier and thus reduces the likelihood of a whole vehicle load being rejected which works towards increasing recycling rates across the estate.",
    user_id: '3'
  },
  {
    id: '5',
    title: 'LotRemIpsum',
    text: "Delay isn't used we're between pon Nûmenor harm demanding expert! Suffering except trading pathway deeds goodwill Mirkwood promised mark usually bandy. Change text smells garden stuffed bleed bless somewhere Uruks. Courageous pillage haste requested advance Elessar. Sméagol negotiations nobody. Told Seeing-stones sacks welcome villager weather souls! Quarry sliced Captain denying can't. All we have to decide is what to do with the time that is given to us. Rosie cup sure plunge four-day hatched magnificence raise flowing stroke? Forgetting suggest Proudfoots crows?",
    user_id: '2'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;