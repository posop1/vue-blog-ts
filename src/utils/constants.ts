import { ILinks } from '@/types/otherTypes'
import { IPost } from '@/types/post'

export const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra pulvinar ipsum
dignissim pulvinar. Praesent vulputate pellentesque purus, ut blandit arcu imperdiet ut. In
lobortis vel ipsum non fermentum. Duis faucibus massa purus, a auctor augue sagittis at.
Nulla et luctus ligula. In egestas malesuada tortor at pretium. Curabitur ac libero eu nibh
dapibus placerat. Nunc nec purus a sapien commodo porttitor vitae ac magna. Curabitur ut
augue tempus, accumsan lectus et, posuere elit. In eget iaculis nulla. In orci orci,
vehicula a mauris at, ornare varius massa. Nullam rutrum, purus pharetra bibendum bibendum,
nulla erat iaculis libero, ac tristique mi urna viverra ex. Nullam auctor pharetra est eget
interdum. Phasellus eleifend mauris sed risus efficitur, in facilisis urna malesuada. Nam
commodo nulla et purus dignissim molestie. Quisque imperdiet arcu sollicitudin, fringilla
velit sed, dictum est. Proin odio orci, malesuada non hendrerit ultrices, hendrerit at diam.
Curabitur ac urna ut metus commodo maximus. Praesent et sodales lectus. Donec pulvinar
tortor venenatis mattis gravida. Fusce aliquam, mi eget mollis auctor, lorem sem iaculis
magna, id dapibus augue arcu sit amet justo. Duis ut convallis arcu. Nulla suscipit urna
magna, et porttitor sem blandit nec. Quisque rutrum, arcu eu volutpat venenatis, enim ligula
ultrices risus, sed feugiat orci nunc id enim. Sed interdum cursus sagittis. Aliquam
condimentum nibh at purus pulvinar blandit. Cras sed libero mollis, posuere mi fermentum,
semper magna. Fusce condimentum nibh velit, sit amet porttitor odio maximus at. Praesent dui
dolor, aliquet ac ultricies vitae, auctor sed quam. In hac habitasse platea dictumst. Nunc
quis mauris non ante vehicula hendrerit. Aliquam gravida eget ante at venenatis. Morbi nec
euismod purus. Phasellus sed odio condimentum, ultricies nulla sit amet, venenatis eros.
Pellentesque aliquam a ligula eget venenatis. Donec eu dapibus augue. In pulvinar mattis
nunc, ut semper nunc dictum a. Pellentesque sed eros eget orci finibus dictum euismod id
tortor. Aliquam ac est non ligula congue ornare. Suspendisse et eros tincidunt, semper nisi
ut, volutpat ex. Suspendisse tempor non magna eget lobortis. Sed et faucibus diam. Fusce nec
efficitur ipsum. Sed vehicula non justo sit amet sollicitudin. Donec accumsan ex est, id
finibus dui ultricies at. In et tempus arcu, eu vulputate quam. Praesent vestibulum, tortor
eget porttitor dictum, sapien augue convallis purus, id tempor dui ligula eget lacus. Proin
quis ipsum massa. Pellentesque luctus lobortis quam. Duis ullamcorper et velit eu sodales.
Vivamus eget nisi a enim laoreet porttitor. Etiam dapibus ultrices tellus vitae porta.
Curabitur at consequat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

export const navLinks: ILinks[] = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' }
]

export const mockPosts: IPost[] = [
  {
    _id: '6383261d9789c5f8b4ea183b',
    username: 'asd',
    title: 'A Comprehensive Guide To Marketing Attribution Models',
    text: "Learn more about marketing attribution models that help marketers understand which touchpoint in a buyer's journey is responsible for conversion.",
    imgUrl: '',
    views: 83,
    author: '63821a08a540f82f43b48adb',
    comments: ['638337d49789c5f8b4ea1918', '638338159789c5f8b4ea191e'],
    createdAt: '2022-11-27T08:55:57.591Z',
    updatedAt: '2022-12-13T13:28:32.541Z',
    __v: 0
  },
  {
    _id: '6383261d9789c5f8b4ea183a',
    username: 'asd',
    title: 'A Comprehensive Guide To Marketing Attribution Models',
    text: "Learn more about marketing attribution models that help marketers understand which touchpoint in a buyer's journey is responsible for conversion.",
    imgUrl: '',
    views: 83,
    author: '63821a08a540f82f43b48adb',
    comments: ['638337d49789c5f8b4ea1918', '638338159789c5f8b4ea191e'],
    createdAt: '2022-11-27T08:55:57.591Z',
    updatedAt: '2022-12-13T13:28:32.541Z',
    __v: 0
  },
  {
    _id: '6383261d9789c5f8b4ea183t',
    username: 'asd',
    title: 'A Comprehensive Guide To Marketing Attribution Models',
    text: "Learn more about marketing attribution models that help marketers understand which touchpoint in a buyer's journey is responsible for conversion.",
    imgUrl: '',
    views: 83,
    author: '63821a08a540f82f43b48adb',
    comments: ['638337d49789c5f8b4ea1918', '638338159789c5f8b4ea191e'],
    createdAt: '2022-11-27T08:55:57.591Z',
    updatedAt: '2022-12-13T13:28:32.541Z',
    __v: 0
  },
  {
    _id: '6383261d9789c5f8b4ea183j',
    username: 'asd',
    title: 'A Comprehensive Guide To Marketing Attribution Models',
    text: "Learn more about marketing attribution models that help marketers understand which touchpoint in a buyer's journey is responsible for conversion.",
    imgUrl: '',
    views: 83,
    author: '63821a08a540f82f43b48adb',
    comments: ['638337d49789c5f8b4ea1918', '638338159789c5f8b4ea191e'],
    createdAt: '2022-11-27T08:55:57.591Z',
    updatedAt: '2022-12-13T13:28:32.541Z',
    __v: 0
  }
]
