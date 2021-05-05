import React from 'react';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search: any) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Pesquise aqui..."
                onChangeText={this.updateSearch}
                value={search}
                platform="ios"
                containerStyle={{ width:300}}
            />
        );
    }
}