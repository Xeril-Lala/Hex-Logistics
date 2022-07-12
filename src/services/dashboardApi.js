export async function getDashboardData() {
    let response = {
        data: {
            loaded: {

                percentage : 42,
                current : 3,
                goal: 7
            },
            unloaded:{
                percentage: 30,
                current: 3,
                goal: 10
            },
            bays:[
                {
                    id: 1001,
                    name: 'Bay 1',
                    people: 3,
                    time: '10:00',
                    status: {
                        id: 'LG',
                        text: 'Loading',
                        icon: 'arrow-circle-up'
                        },
                    chart: {
                        percentage: '43%',
                        current: 3,
                        goal: 7
                    }
                },
                {
                    id: 1002,
                    name: 'Bay 2',
                    people: 3,
                    time: '10:05',
                    status: {
                        id: 'UG',
                        text: 'Unloading',
                        icon: 'arrow-circle-down'
                        },
                    chart: {
                        percentage: '25%',
                        current: 2,
                        goal: 8
                    }
                },
                {
                    id: 1003,
                    name: 'Bay 3',
                    people: 0,
                    time: '00:00',
                    status: {
                        id: 'WG',
                        text: 'Waiting',
                        icon: 'clock'
                        },
                    chart: {
                        percentage: '44%',
                        current: 4,
                        goal: 9
                    }
                },
                {
                    id: 1004,
                    name: 'Bay 4',
                    people: 0,
                    time: '00:00',
                    status: {
                        id: 'UE',
                        text: 'Unavailable',
                        icon: 'minus-circle'
                        },
                    chart: {
                        percentage: '25%',
                        current: 1,
                        goal: 4
                    }
                },
                {
                    id: 1005,
                    name: 'Bay 5',
                    people: 5,
                    time: '07:00',
                    status: {
                        id: 'UG',
                        text: 'Unloading',
                        icon: 'arrow-circle-down'
                        },
                    chart: {
                        percentage: '43%',
                        current: 3,
                        goal: 7
                    }
                },
                {
                    id: 1006,
                    name: 'Bay 6',
                    people: 2,
                    time: '12:15',
                    status: {
                        id: 'LG',
                        text: 'Loading',
                        icon: 'arrow-circle-up'
                        },
                    chart: {
                        percentage: '40%',
                        current: 2,
                        goal: 5
                    }
                },

            ]
        }
    };
    return response;
}
