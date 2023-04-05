import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { Application } from '../RegApplication/types/types';
import { addAppInPart, delPart } from '../Participant/partSlice';
import './Application.css';
import { IdRace } from '../Calendar/types/types';

function ApplicationCard({
  application,
  id,
}: {
  application: Application;
  id: IdRace;
}): JSX.Element {
  const [icon, setIcon] = useState(true);
  const dispatch = useAppDispatch();
  const pushApplPart = (): void => {
    setIcon((prev) => !prev);
    dispatch(addAppInPart({ id, applicationId: application.id }));
  };
  const delApplPart = (): void => {
    setIcon((prev) => !prev);
    dispatch(delPart({ id, applicationId: application.id }));
  };
  return (
    <tr>
      <td>
        {icon ? (
          <button className="icon-add" type="submit" onClick={pushApplPart} />
        ) : (
          <button className="icon-del" type="submit" onClick={delApplPart} />
        )}
      </td>
      <td>{application.familiya}</td>
      <td>{application.name}</td>
      <td>{application.otchestvo}</td>
      <td>{application.email}</td>
      <td>{application.datarojdeniya}</td>
      <td>{application.gorod}</td>
      <td>{application.phone}</td>
      <td>{application.udostovorenieVoditel}</td>
      <td>{application.licenseRAFNAF}</td>
      <td>{application.medicalReport}</td>
      <td>{application.markaModelAuto}</td>
      <td>{application.gosNomer}</td>
      <td>{application.objemDvigatelya}</td>
      <td>{application.tipPrivoda}</td>
      <td>{application.markaModelPokryshek}</td>
      <td>{application.nalichieNadduva}</td>
      <td>{application.mnogodresselnyVpusk}</td>
      <td>{application.izmFazyGazoraspredeleniya}</td>
      <td>{application.nestandartnyVpusk}</td>
      <td>{application.izmKuzova}</td>
      <td>{application.groupListId}</td>
      <td>{application.startNomer}</td>
      <td>{application.ispolzovanieAutoDrugimi}</td>
      <td>{application.startNomer}</td>
    </tr>
  );
}

export default ApplicationCard;