import CreateError from 'create-error';


export const DataReferenceError = CreateError('Data Reference Error');

export const SerializerNotRegisteredError = CreateError('Serializer Not Registered Error');

export const TopLevelDocumentError = CreateError('Top Level Document Error');
