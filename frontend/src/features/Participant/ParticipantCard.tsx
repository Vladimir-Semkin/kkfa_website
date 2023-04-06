import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
// import { Application } from '../RegApplication/types/types';
// import { addAppInPart, delPart } from '../Participant/partSlice';
import '../Application/Application.css';
import { IdRace } from '../Calendar/types/types';
import { delPart } from './partSlice';
import { ApprovedParticipant } from './types/types';

function ParticipantCard({
  participant,
  id,
}: {
  participant: ApprovedParticipant;
  id: IdRace;
}): JSX.Element {
  // const [icon, setIcon] = useState(true);
  const dispatch = useAppDispatch();
  // const pushApplPart = (): void => {
  //   setIcon((prev) => !prev);
  //   dispatch(addAppInPart({ id, applicationId: application.id }));
  // };
  const delApplPart = (): void => {
    // setIcon((prev) => !prev);
    dispatch(delPart({ id, applicationId: participant.Application.id }));
  };

  return (
    <tr>
      {/* <td>
        {icon ? (
          <button className="icon-add" type="submit" onClick={pushApplPart} />
        ) : (
          <button className="icon-del" type="submit" onClick={delApplPart} />
        )}
      </td> */}
      <td><button className="icon-del-part" type="submit" onClick={delApplPart} /></td>
      <td>{participant.Application.familiya}</td>
      <td>{participant.Application.name}</td>
      <td>{participant.Application.otchestvo}</td>
      <td>{participant.Application.email}</td>
      <td>{participant.Application.datarojdeniya}</td>
      <td>{participant.Application.gorod}</td>
      <td>{participant.Application.phone}</td>
      <td>{participant.Application.udostovorenieVoditel}</td>
      <td>{participant.Application.licenseRAFNAF}</td>
      <td>{participant.Application.medicalReport}</td>
      <td>{participant.Application.markaModelAuto}</td>
      <td>{participant.Application.gosNomer}</td>
      <td>{participant.Application.objemDvigatelya}</td>
      <td>{participant.Application.tipPrivoda}</td>
      <td>{participant.Application.markaModelPokryshek}</td>
      <td>{participant.Application.nalichieNadduva}</td>
      <td>{participant.Application.mnogodresselnyVpusk}</td>
      <td>{participant.Application.izmFazyGazoraspredeleniya}</td>
      <td>{participant.Application.nestandartnyVpusk}</td>
      <td>{participant.Application.izmKuzova}</td>
      <td>{participant.Application.groupListId}</td>
      <td>{participant.Application.startNomer}</td>
      <td>{participant.Application.ispolzovanieAutoDrugimi}</td>
      <td>{participant.Application.startNomer}</td>
    </tr>
  );
}

export default ParticipantCard;
