import { Firestore } from '@google-cloud/firestore';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    const firestore = new Firestore({
      projectId: 'red-context-430321-u5',
      databaseId: 'mongo-ista',
    });

    const collectionReference = firestore.collection('events');
    const cityDocuments = await collectionReference
      .orderBy('name')
      .limitToLast(2)
      .get();
    const cityDocumentData = cityDocuments.docs.map((d) => d.data());

    return cityDocumentData;

    // return 'Hello World!';
  }
}
