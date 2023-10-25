import { atom, useAtom } from 'jotai';
import OneUpPreview from './../components/modules/OneUp/OneUpPreview';


// Create an atom to hold the selected two ups array
export const selectedTwoUpsAtom = atom([<OneUpPreview />, <OneUpPreview />]);

// Create a function to add a two up to the selected array
export const addSelectedTwoUp = atom(null, (get, set, twoUp) => {
    const selectedTwoUps = get(selectedTwoUpsAtom);
    set(selectedTwoUpsAtom, [...selectedTwoUps, twoUp]);
});

// Create a function to remove a two up from the selected array
export const removeSelectedTwoUp = atom(null, (get, set, twoUp) => {
    const selectedTwoUps = get(selectedTwoUpsAtom);
    set(selectedTwoUpsAtom, selectedTwoUps.filter((item) => item.id !== twoUp.id));
});

// Example usage in a component
function MyComponent() {
    const [selectedTwoUps, setSelectedTwoUps] = useAtom(selectedTwoUpsAtom);
    const addTwoUp = useAtom(addSelectedTwoUp)[1];
    const removeTwoUp = useAtom(removeSelectedTwoUp)[1];

    const handleAddTwoUp = (twoUp) => {
        addTwoUp(twoUp);
    };

    const handleRemoveTwoUp = (twoUp) => {
        removeTwoUp(twoUp);
    };

    return (
        <div>
            {selectedTwoUps.map((twoUp) => (
                <div key={twoUp.id}>
                    <p>{twoUp.title}</p>
                    <button onClick={() => handleRemoveTwoUp(twoUp)}>Remove</button>
                </div>
            ))}
            <button onClick={() => handleAddTwoUp({ id: 1, title: 'Two Up 1' })}>Add Two Up 1</button>
            <button onClick={() => handleAddTwoUp({ id: 2, title: 'Two Up 2' })}>Add Two Up 2</button>
        </div>
    );
}
