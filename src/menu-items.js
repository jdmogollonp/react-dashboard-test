const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'Projects',
                    title: 'Projects',
                    type: 'item',
                    url: '/app/dashboard',
                    icon: 'feather icon-folder'
                },
                {
                    id: 'New project',
                    title: 'New project',
                    type: 'item',
                    url: '/app/dashboard/projects',
                    icon: 'feather icon-plus-square'
                }
            ]
        },
 
    ]
};

export default menuItems;
