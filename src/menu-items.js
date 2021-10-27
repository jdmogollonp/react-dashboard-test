const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'Home',
                    title: 'Home',
                    type: 'item',
                    url: '/app/dashboard/default',
                    icon: 'feather icon-home'
                },
                {
                    id: 'Projects',
                    title: 'Projects',
                    type: 'item',
                    url: '/app/dashboard/default',
                    icon: 'feather icon-home'
                }
            ]
        },
       {/*
        {
            id: 'ui-forms',
            title: 'IDM',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'forms',
                    title: 'Upload input data',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-file-text'
                },
             
            ]
        },
    
        {
            id: 'resources',
            title: 'Resources',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'product-page',
                    title: 'Download resource',
                    type: 'item',
                    url: '',
                    classes: 'nav-item',
                    icon: 'feather icon-download',
                    target: true,
                    external: true
                },

            ]
        }  */}      
    ]
};

export default menuItems;
