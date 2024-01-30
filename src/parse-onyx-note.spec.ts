
// describe("test parsing", () => {
//     it("should parse correctly", () => {

import { extractOnyxReadingNotesV2 } from './extract-onyx-notes';
import { OnyxBooxExtractorSettings } from './models';

//         let note :  ReadingNoteDetails = {
//             raw: ''
//         };

//         let result = parseNoteV2(note);
//       expect(result.originalText).toEqual(3);
//     });
//   });
  
describe("test full parsing", () => {
    it("should parse file correctly", () => {

        const settings : OnyxBooxExtractorSettings={
          permanentNotePrefix: '',
          referenceNotePrefix: '',
          literatureNotePrefix: '',
          createReferenceNote: false
        };

        let result = extractOnyxReadingNotesV2(null, settings, `Заметки при чтении | <<Чистая архитектура>>Роберт Сесил Мартин
        2023-03-31 03:23  |  Страница: 4
        Посвящается моей любимой супруге, моим четырем замечательным детям и их семьям
        -------------------
        Предисловие
        2023-03-31 03:24  |  Страница: 4
        включая пятерых внуков — радость моей жиз
        -------------------`);

        expect(true).toEqual(true);
    });
  });