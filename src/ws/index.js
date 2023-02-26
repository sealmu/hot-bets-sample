import { updateScores } from '../store/actions/scores'

const init = (store) => {
    const socket = new WebSocket('ws://0.0.0.0:8080');
    socket.onmessage = function(e) {
        const data = JSON.parse(e.data);

        switch (data.type) {
            case "scoreGridMock":
                const state = store.getState();
                const blocks = JSON.parse(JSON.stringify(state.scores.blocks));
                blocks.forEach( b => {
                    b.groups.forEach( g => {
                        g.list.forEach( l => {
                            l.isUpdated = false;
                        })
                    })
                })

                updateScores({blocks})(store.dispatch);
                setTimeout(() => {
                    updateScores(data.data)(store.dispatch);
                })
                break;
        }

        console.log(data);
    };
}

export default init;