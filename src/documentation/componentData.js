import * as Modules from './modules';

export const componentData = [
  {
    name: 'Button',
    description: 'A customizable button used to trigger an action.',
    component: Modules.ButtonExample,
    code: Modules.ButtonCode,
    propDescriptions: [
      {
        propName: 'children',
        propType: 'node',
        propDefault: null,
        propDescription: 'The content inside the button.'
      },
      {
        propName: 'type',
        propType: 'string',
        propDefault: 'primary',
        propDescription: 'The type of button (primary, secondary, reverse or danger).'
      },
      {
        propName: 'size',
        propType: 'string',
        propDefault: 'normal',
        propDescription: 'The size of the button (small, normal, large).'
      },
      {
        propName: 'component',
        propType: 'string',
        propDefault: 'button',
        propDescription: 'The HTML element of the button, for example, if an anchor tag is needed rather than a button tag.'
      }
    ]
  },
  {
    name: 'Card',
    description: 'A block containing a short summary, such as a person\'s profile, usually used as a grid item.',
    component: Modules.CardExample,
    code: Modules.CardCode,
    propDescriptions: [
      {
        propName: 'avatarSrc',
        propType: 'string',
        propDefault: null,
        propDescription: 'The source of the image.'
      },
      {
        propName: 'name',
        propType: 'string',
        propDefault: null,
        propDescription: 'The name or title of the card.'
      },
      {
        propName: 'description',
        propType: 'string',
        propDefault: null,
        propDescription: 'The description/summary of the card.'
      },
      {
        propName: 'linkSrc',
        propType: 'string',
        propDefault: null,
        propDescription: 'The url for a link on the card.'
      }
    ]
  },
  {
    name: 'Carousel',
    description: 'A carousel/slider used to view images one at a time that slide horizontally into view.',
    component: Modules.CarouselExample,
    code: Modules.CarouselCode,
    propDescriptions: [
      {
        propName: 'images',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of objects with a title property and an image src property.'
      },
      {
        propName: 'showDots',
        propType: 'boolean',
        propDefault: 'false',
        propDescription: 'Use to show navigation dots.'
      }
    ]
  },
  {
    name: 'Dropdown',
    description: 'A hidden menu that appears on a button click, used for profile menus, additional settings, etc.',
    component: Modules.DropdownExample,
    code: Modules.DropdownCode,
    propDescriptions: [
      {
        propName: 'label',
        propType: 'string',
        propDefault: null,
        propDescription: 'The text label for the dropdown button.'
      },
      {
        propName: 'data',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of objects with a name and url property for the menu links.'
      },
      {
        propName: 'linksDisabled',
        propType: 'boolean',
        propDefault: 'false',
        propDescription: 'Set to true to disable anchor links.'
      }
    ]
  },
  {
    name: 'Fetcher',
    description: 'A container component used to call an API.',
    component: Modules.FetcherExample,
    code: Modules.FetcherCode,
    propDescriptions: [
      {
        propName: 'render',
        propType: 'function',
        propDefault: null,
        propDescription: 'The render function.'
      },
      {
        propName: 'loader',
        propType: 'component',
        propDefault: null,
        propDescription: 'An optional Spinner/Loader component.'
      },
      {
        propName: 'url',
        propType: 'string',
        propDefault: 'normal',
        propDescription: 'The url to fetch.'
      }
    ]
  },
  {
    name: 'Grid',
    description: 'A wrapper component that lays out its children using CSS Grid.',
    component: Modules.GridExample,
    code: Modules.GridCode,
    propDescriptions: [
      {
        propName: 'children',
        propType: 'node',
        propDefault: null,
        propDescription: 'The grid items to be rendered.'
      },
      {
        propName: 'cols',
        propType: 'string',
        propDefault: 'repeat(auto-fit, minmax(200px, 1fr))',
        propDescription: 'The value for the grid-template-columns property.'
      },
      {
        propName: 'rows',
        propType: 'string',
        propDefault: null,
        propDescription: 'The value for the grid-template-rows property.'
      }
    ]
  },
  {
    name: 'HeaderBar',
    description: 'A horizontal bar at the top of a page, used to present branding, a search box, and/or a navigation menu.',
    component: Modules.HeaderBarExample,
    code: Modules.HeaderBarCode,
    propDescriptions: [
      {
        propName: 'title',
        propType: 'string',
        propDefault: null,
        propDescription: 'The title text of the header.'
      }
    ]
  },
  {
    name: 'Icon',
    description: 'An inline svg rendering of one of a set of commonly used icons.',
    component: Modules.IconExample,
    code: Modules.IconCode,
    propDescriptions: [
      {
        propName: 'value',
        propType: 'string',
        propDefault: null,
        propDescription: 'A lowercase string of the icon type (email, facebook, twitter).'
      },
      {
        propName: 'color',
        propType: 'string',
        propDefault: 'gray',
        propDescription: 'A hex value, rgb value, or name for the fill color of the icon.'
      }
    ]
  },
  {
    name: 'LazyLoad',
    description: 'A wrapper for loading images efficiently as they scroll into view.',
    component: Modules.LazyLoadExample,
    code: Modules.LazyLoadCode,
    propDescriptions: [
      {
        propName: 'children',
        propType: 'node',
        propDefault: null,
        propDescription: 'The images to lazy load.'
      }
    ]
  },
  {
    name: 'List',
    description: 'A list of multiple items, presented either vertically or horizontally.',
    component: Modules.ListExample,
    code: Modules.ListCode,
    propDescriptions: [
      {
        propName: 'listTitle',
        propType: 'string',
        propDefault: null,
        propDescription: 'The title of the list.'
      },
      {
        propName: 'data',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of the list items to render.'
      }
    ]
  },
  {
    name: 'Loader',
    description: 'An animated spinner used to indicate that content is loading.',
    component: Modules.LoaderExample,
    code: Modules.LoaderCode,
    propDescriptions: []
  },
  {
    name: 'Modal',
    description: 'A pop-in box used to present information center-screen.',
    component: Modules.ModalExample,
    code: Modules.ModalCode,
    propDescriptions: [
      {
        propName: 'title',
        propType: 'string',
        propDefault: null,
        propDescription: 'The title of the modal.'
      },
      {
        propName: 'children',
        propType: 'node',
        propDefault: null,
        propDescription: 'The content of the modal.'
      },
      {
        propName: 'isOpen',
        propType: 'boolean',
        propDefault: null,
        propDescription: 'A boolean to open or close the modal.'
      },
      {
        propName: 'handleClose',
        propType: 'function',
        propDefault: null,
        propDescription: 'Callback function to close the modal.'
      }
    ]
  },
  {
    name: 'NavMenu',
    description: 'A list of navigation links, presented either vertically or horizontally.',
    component: Modules.NavMenuExample,
    code: Modules.NavMenuCode,
    propDescriptions: [
      {
        propName: 'menuTitle',
        propType: 'title',
        propDefault: null,
        propDescription: 'The title of the navigation menu.'
      },
      {
        propName: 'linkColor',
        propType: 'string',
        propDefault: 'rgb(52, 88, 226)',
        propDescription: 'The type button (primary, secondary, reverse or danger).'
      },
      {
        propName: 'linkType',
        propType: 'string',
        propDefault: 'anchorLink',
        propDescription: 'A standard anchor link or a React Router link.'
      },
      {
        propName: 'linkDisabled',
        propType: 'boolean',
        propDefault: 'false',
        propDescription: 'A boolean that specifies whether the links should be disabled with preventDefault().'
      },
      {
        propName: 'data',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of menu items to render.'
      }
    ]
  },
  {
    name: 'Share',
    description: 'A social sharing widget.',
    component: Modules.ShareExample,
    code: Modules.ShareCode,
    propDescriptions: [
      {
        propName: 'shares',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of social network names.'
      },
      {
        propName: 'url',
        propType: 'string',
        propDefault: null,
        propDescription: 'The url to share.'
      },
      {
        propName: 'title',
        propType: 'string',
        propDefault: null,
        propDescription: 'The subject for email shares.'
      },
      {
        propName: 'text',
        propType: 'string',
        propDefault: null,
        propDescription: 'The text of the share.'
      }
    ]
  },
  {
    name: 'Swiper',
    description: 'A wrapper for adding swipe functionality to images.',
    component: Modules.SwiperExample,
    code: Modules.SwiperCode,
    propDescriptions: [
      {
        propName: 'children',
        propType: 'node',
        propDefault: null,
        propDescription: 'The images to make swipable.'
      },
      {
        propName: 'threshold',
        propType: 'number',
        propDefault: '15',
        propDescription: 'The amount in pixels needed to register a swipe action.'
      },
      {
        propName: 'onSwipeLeft',
        propType: 'function',
        propDefault: null,
        propDescription: 'A callback to run after a left swipe.'
      },
      {
        propName: 'onSwipeRight',
        propType: 'function',
        propDefault: null,
        propDescription: 'A callback to run after a right swipe.'
      }
    ]
  },
  {
    name: 'Table',
    description: 'A responsive table that displays vertically on small screens.',
    component: Modules.TableExample,
    code: Modules.TableCode,
    propDescriptions: [
      {
        propName: 'tableHeads',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of table column headings.'
      },
      {
        propName: 'tableData',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of objects, with each object representing a row containing cell data.'
      }
    ]
  }
];
